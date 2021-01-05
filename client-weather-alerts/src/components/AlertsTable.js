import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const alerts = [
    {
        city: "Montreal, CA",
        currentTmp: "-20",
        condition: "< -10",
        lastTriggered: "22/10/2020, 15:40",
        duration: "00:05:20",
        status: true
    },
    {
        city: "Ohio, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: false
    },
    {
        city: "Washington, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: false
    },
    {
        city: "New York, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: true
    },
    {
        city: "Boston, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: true
    },
    {
        city: "San Fransisco, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: false
    },
    {
        city: "Las Vegas, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: "13/10/2020, 10:40",
        duration: "10:40:20",
        status: false
    }
]
export default function AlertsTable() {
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
                    {alerts.map((row) => (
                        <TableRow key={row.city}>
                            <TableCell>{row.city}</TableCell>
                            <TableCell align="right">{row.currentTmp}</TableCell>
                            <TableCell align="right">{row.condition}</TableCell>
                            <TableCell align="right">{row.lastTriggered}</TableCell>
                            <TableCell align="right">{row.duration}</TableCell>
                            <TableCell align="right">
                                {row.status ? <ErrorIcon style={{color: "red"}}/> : <CheckCircleIcon style={{color: "#06D6A0"}}/>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>            
        </TableContainer>
    )
}
