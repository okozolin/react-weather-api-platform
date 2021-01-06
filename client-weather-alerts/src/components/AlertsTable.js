import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Moment from "react-moment";
Moment.globalFormat = "D MMM YYYY";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const alertsMock = [
    {
        city: "Montreal, CA",
        currentTmp: "-20",
        condition: "< -10",
        lastTriggered: 160994084374,
        duration: +0,
        status: true
    },
    {
        city: "Ohio, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 609940843745,
        duration: "10:40:20",
        status: false
    },
    {
        city: "Washington, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 160994084375,
        duration: "10:40:20",
        status: false
    },
    {
        city: "New York, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 109940843745,
        duration: "10:40:20",
        status: true
    },
    {
        city: "Boston, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 169940843745,
        duration: "10:40:20",
        status: true
    },
    {
        city: "San Fransisco, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 160994084745,
        duration: "10:40:20",
        status: false
    },
    {
        city: "Las Vegas, US",
        currentTmp: "27",
        condition: "> 40",
        lastTriggered: 16099443745,
        duration: "10:40:20",
        status: false
    }
]
export default function AlertsTable({alerts}) {
    console.log("alerts passed from app-->", alerts)
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
                    {alerts.length != 0 && alerts.map((row) => (
                        <TableRow key={row.city}>
                            <TableCell>{row.city}</TableCell>
                            <TableCell align="right">{row.currentTemp}</TableCell>
                            <TableCell align="right">{row.condition}</TableCell>
                            <TableCell align="right">
                               {row.lastTriggered && <Moment format="DD/MM/YYYY HH:mm">{row.lastTriggered}</Moment> }                               
                            </TableCell>
                            <TableCell align="right">
                                {row.duration >0 && (
                                <Moment format="HH:mm:ss">{row.duration}</Moment>
                                )}
                            </TableCell>
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
