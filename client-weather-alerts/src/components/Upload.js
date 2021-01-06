import React , {useEffect, useState} from 'react'
import { Box, Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Api from "../services/uploadService"

export default function Upload({setAlerts}) {
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {

        const updateTable = async () => {
            if (file) {

            const res = await Api.uploadFile(
                file, 
                (event) => 
                    setProgress(
                      Math.round((100 * event.loaded) / event.total)
                    ))
            if (res.status === "succeeded") {
                const alerts = await Api.getAlerts()
                setAlerts(alerts.data)    
            }
            else console.log("Upload.js: Failed to load file")   
        }
    }
        updateTable()
    }, [file])

    const handleSelect = (e) => {
        console.log("clicked button")
        setFile(e.target.files[0])
    }
    console.log("file", file)
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
