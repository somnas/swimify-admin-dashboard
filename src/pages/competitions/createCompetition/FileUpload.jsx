import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';
import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function FileUpload() {

    const theme = useTheme();
    const textColor = theme.palette.lightText.main;

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('file added');
        console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Grid item xs={12}>
            <Box {...getRootProps()} display='flex' justifyContent='center' sx={{ py: 8, px: 4, border: `dashed 1px ${theme.palette.light.focus}`, borderRadius: 2 }}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <Typography fontSize='1rem' color={textColor}>Drop the files here ...</Typography>
                        :
                        <Typography fontSize='1rem' color={textColor}>Drag 'n' drop some files here, or click to select files</Typography>
                }
            </Box>
        </Grid>
    );
}
