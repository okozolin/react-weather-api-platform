import React , {useEffect, useState} from 'react'
import { Box, Button} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Api from "../services/uploadService"

export default function Upload() {
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(null)

    // useEffect(() => {
    //     Api.uploadFile(
    //         file, 
    //         (event) => 
    //             setProgress(
    //               Math.round((100 * event.loaded) / event.total)
    //             ))
    // }, [file])

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
