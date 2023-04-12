import React from 'react';

import { TextField, Grid, Button, InputAdornment } from '@mui/material';
import { FieldConfig, useField } from 'formik';

export default function ButtonInputFieldUpload({ label, buttonText, onClick, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                label={label}
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Button variant='grey' component='label' sx={{ fontSize: '0.6rem' }}>
                                <input hidden accept='image/*' multiple type='file' />
                                {buttonText}
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    );
}