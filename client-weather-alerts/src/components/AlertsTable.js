import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Moment from "react-moment";
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AlertsTable({alerts}) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell align="right">Current Temprature</TableCell>
                        <TableCell align="right">Condition</TableCell>
                        <TableCell align="right">Last Triggered</TableCell>
                        <TableCell align="right">Duration</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {alerts.length ? alerts.map((row) => (
                        <TableRow key={row.city}>
                            <TableCell>{row.city}</TableCell>
                            <TableCell align="right">{row.currentTemp}</TableCell>
                            <TableCell align="right">{row.condition}</TableCell>
                            <TableCell align="right">
                               {row.lastTriggered && <Moment format="DD/MM/YYYY HH:mm">{row.lastTriggered}</Moment> }                               
                            </TableCell>
                            <TableCell align="right">
                                {row.duration ? (
                                    moment.duration(row.duration).format("HH:mm:ss")
                                ): null}
                            </TableCell>
                            <TableCell align="right">
                                {row.status ? <ErrorIcon style={{color: "red"}}/> : <CheckCircleIcon style={{color: "#06D6A0"}}/>}
                            </TableCell>
                        </TableRow>
                    )) : null }
                </TableBody>
            </Table>            
        </TableContainer>
    )
}
