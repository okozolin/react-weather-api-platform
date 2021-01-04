import React from 'react'
import { List, ListItem, Grid, Button } from "@material-ui/core";

const alerts = [
    {
        ["Montreal, CA"] : {
            name: "Montreal, CA",
            currentTmp: "-20",
            condition: "< -10",
            lastTriggered: "22/10/2020, 15:40",
            duration: "00:05:20",
            status: true
        },
        ["Ohio, US"] : {
            name: "Ohio, US",
            currentTmp: "27",
            condition: "> 40",
            lastTriggered: "13/10/2020, 10:40",
            duration: "10:40:20",
            status: false
        }
    },
]
export default function AlertsTable() {
    return (
        <div>
            Alerts Table
            <List>
          {alerts &&
            alerts.map((city, index) => (
              <ListItem
                divider
                key={index}
                >
                    <p>{city.name}</p>
                    <p>{city.currentTmp}</p>
                    <p>{city.condition}</p>
                    <p>{city.lastTriggered}</p>
                    <p>{city.duration}</p>
                    <p>{city.status}</p>
              </ListItem>
            ))}
        </List>
        </div>
    )
}
