import React, { useEffect, useState } from 'react';

import { TextField, Grid, Button, InputAdornment } from '@mui/material';
import { FieldConfig, useField } from 'formik';

export default function ButtonInputFieldUpload({ label, buttonText, onClick, ...props }) {

    const [field, meta] = useField(props);
    const [fileName, setFileName] = useState('');

    console.log(fileName);

    const handleFile = (e) => {
        //console.log(e.target.value);
        setFileName(e.target.value);
    };

    /* useEffect(() => {

    }, [fileName]); */

    return (
        <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                value={fileName}
                label={label}
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Button variant='grey' component='label' sx={{ fontSize: '0.6rem' }}>
                                <input hidden accept='image/png, image/jpeg, image/jpg' multiple type='file' onChange={(e) => handleFile(e)} />
                                {buttonText}
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    );
}