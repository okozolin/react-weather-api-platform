import React , {useEffect, useState} from 'react'
import { Box, Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Api from "../services/api"
import {SUCCEEDED} from "../constants"

export default function Upload({setUploaded}) {
    const [file, setFile] = useState(null)

    useEffect(() => {
        const updateTable = async () => {
            if (file) {
                const res = await Api.uploadFile(file)
                if (res.status === SUCCEEDED) {
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
