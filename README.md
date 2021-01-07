# Weather Alerts platform
Platform which alerts regarding extreme temperature change

![Weather app platform](weatherTable.png)

## Created by: Orit Kozolin

<hr>

## App Functional requirenments

### Basic functionality

- Loader - hide the data, until it is being loaded (for the exercise purposes, show it for  a constant time of 3 seconds)

- A title which will present the current time. formatted as followed: 24/12/2020, 13:40
- Upload button  - On click, will open a file selection dialog, given a csv file to upload, which will override the current alerts. (See example csv file)

- Alerts table
    - City: name of a city in the globe.
    - Condition: a boolean expression, which defines whether the alert is active or not, contains the desired weather condition, see example in the csv file.
    Can Include only the following conditions: < , >, =.
    - Last triggered: the last time when the alert status was changed from non active to active, Formatted as followed: (24/12/2020, 13:40).
    - Status: red icon if the condition is true, green otherwise.
    - Duration: the elapsed time when the alert was/is in active status.
(Format: HH:mm:ss, assume no more than 99 hours)
    - Table should be sorted by active status first (red > green) and by city name.
The page should be refreshed automatically , with a minimum resolution of 1 minute.



## Tech Stack

- Client: React + Material UI
- Server: Express (Node)

<hr>

## Getting Started

### Development mode

- For the Server

```bash
npm start
```

- For the Client

```bash
npm start
```

- ports

  Client: http://localhost:3001

  Server: http://localhost:3002
