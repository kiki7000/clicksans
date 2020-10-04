import React from 'react'
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { LocalGroceryStore, Menu, ChevronLeft, ChevronRight } from '@material-ui/icons'

import NavItem from './NavItem'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -240,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false)

    return (
        <div className = {classes.root}>
            <AppBar
                position = 'fixed'
                className = {clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color = 'inherit'
                        aria-label = 'open drawer'
                        onClick = {handleDrawerOpen}
                        edge = 'start'
                        className = {clsx(classes.menuButton, open && classes.hide)}
                    >
                        <Menu />
                    </IconButton>

                    <Typography variant = 'h6' noWrap>
                        <a href = '/' style = {{color: 'white'}}>ClickSans</a>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className = {classes.drawer}
                variant = 'persistent'
                anchor = 'left'
                open = {open}
                classes = {{
                    paper: classes.drawerPaper,
                }}
            >
                <div className = {classes.drawerHeader}>
                    <IconButton onClick = {handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <List>
                    <NavItem name = 'Store' icon = {(<LocalGroceryStore />)} href = '/store' />
                </List>
            </Drawer>

            <main
                className = {clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    )
}

export default Navbar;