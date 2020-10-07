import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const NavItem = (props) => (
    <ListItem button to = {props.to} component = 'a' key = {props.name}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary = {props.name} style = {{color: 'rgba(0, 0, 0, 0.54)'}} />
    </ListItem>
)

export default NavItem