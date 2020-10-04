import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button'

const StoreItem = (props) => (
    <TableRow key={props.name}>
        <TableCell component="th" scope="row">
            {props.name}
        </TableCell>
        <TableCell align="right">{props.clicks}</TableCell>
        <TableCell align="right">{props.effect}</TableCell>
        <TableCell align="right">
            <Button variant="contained" color="secondary" onClick = {props.onBuy}>Buy</Button>
        </TableCell>
    </TableRow>
)

export default StoreItem