import React , {useEffect, useState} from 'react'
import { Box, Button, CircularProgress} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Api from "../services/uploadService"

export default function Upload({setAlerts}) {
    const [file, setFile] = useState(null)
    const [uploaded, setUploaded] = useState(false)

    useEffect(() => {
        const updateTable = async () => {
            if (file) {
                const res = await Api.uploadFile(file)
                if (res.status === "succeeded") {
                    const alerts = await Api.getAlerts()
                    setAlerts(alerts.data)
                    setUploaded(true)    
                }
                else {
                    setUploaded(false) 
                    console.log("Upload.js: Failed to load file") 
                }  
            }
        }
        updateTable()
    }, [file])

    useEffect(() => {
        let intervalId
        const refreshTable = async () => {
            if (file) {
            const alerts = await Api.getAlerts()
            setAlerts(alerts.data)  
            }
        }
        intervalId = setInterval(() => refreshTable(), 60000)

        return () => {
            clearInterval(intervalId)
        }
    }, [uploaded])

    const handleSelect = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <Box my={4}>
            <Button
                variant="contained"
                component="label"
                style={{backgroundColor: "#118AB2", color: "white"}}
                startIcon={<CloudUploadIcon />}
            >
                Upload CSV 
                <input 
                    type="file" 
                    hidden
                    onChange={handleSelect}
                    />
            </Button>
        </Box>
    )
}
