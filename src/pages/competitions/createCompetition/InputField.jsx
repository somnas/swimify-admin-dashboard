import React from 'react';

import { TextField, Grid } from '@mui/material';
import { FieldConfig, useField } from 'formik';

export default function InputField({ label, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Grid item xs={12} sm={6} sx={{ bgcolor: '' }}>
            <TextField
                fullWidth
                label={label}
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
            />
        </Grid>
    );
}
