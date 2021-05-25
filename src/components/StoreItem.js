import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const StoreItem = (props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow key={props.name} className = "normalrow">
                <TableCell component="th" scope="row">
                    {props.name}
                </TableCell>
                <TableCell align="right">{props.clicks}</TableCell>
                <TableCell align="right">{props.effect}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="secondary" onClick = {props.onBuy}>Buy</Button>
                </TableCell>
            </TableRow>
            <TableRow key = {props.name}  className = "smallrow">
                <TableCell>
                    <IconButton size = "small" onClick = {() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.name}
                </TableCell>
                <TableCell align="right">{props.clicks}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="secondary" onClick = {props.onBuy}>Buy</Button>
                </TableCell>
            </TableRow>
            <TableRow className = "smallrow">
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto">
                        <Typography style={{marginTop: 10, marginBottom: 10}}>
                            {props.effect}
                        </Typography>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default StoreItem