import React, {useState, useEffect} from 'react'
import { Box, Typography} from "@material-ui/core";
import Moment from "react-moment";
import FaceIcon from "@material-ui/icons/Face";

Moment.globalFormat = "D MMM YYYY";

export default function Header() {
    const [date, setDate] = useState(new Date())

useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000)
    return () => {
        clearInterval(intervalId)
    }
},[])

    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            fontFamily='Roboto Condensed' 
            fontSize={56} p={4} 
            bgcolor="#06D6A0" 
            color="#073B4C">
            <Moment format="DD/MM/YYYY HH:mm">{date}</Moment>

            <Box
                alignItems="center"
                display="flex"
                color="#ce285d"
                >
                <FaceIcon fontSize="large" />
                <Typography>oritkozolin</Typography>
            </Box>
        </Box>
    )
}
