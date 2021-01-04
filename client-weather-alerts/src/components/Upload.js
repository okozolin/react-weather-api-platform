import React , {useEffect, useState} from 'react'
import { Box, Button, TextField, Input } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Api from "../services/uploadService"

export default function Upload() {
    const [file, setFile] = useState(null)

    useEffect(() => {
        Api.upload(file)
    }, [file])

    const handleSelect = (e) => {
        console.log("clicked button")
        setFile(e.target.files[0])
    }
    console.log("file", file)
    return (
        <Box>
            <Button
                variant="contained"
                component="label"
                color="secondary"
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
