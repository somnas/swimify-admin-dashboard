import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';
import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function DropZone() {

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
            <Box {...getRootProps()} display='flex' justifyContent='center' sx={{ py: 6, px: 4, border: `dashed 2px ${theme.palette.light.focus}`, borderRadius: 2, cursor: 'pointer' }}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <Typography fontSize='1rem' color={textColor}>Drop the files here ...</Typography>
                        :
                        <Box display='flex' flexDirection='column' alignItems='center' color={textColor}>
                            <Typography fontSize='1rem'>Drag 'n drop files here, or click to select files</Typography>
                            <Box display='flex' alignItems='center' sx={{ mt: 2 }}>
                                <AddBoxIcon color='inherit' fontSize='medium' sx={{}} />
                                <Typography lineHeight={1.5} ml={1} fontSize='0.8rem'>UPLOAD</Typography>
                            </Box>
                        </Box>
                }
            </Box>
        </Grid>
    );
}
