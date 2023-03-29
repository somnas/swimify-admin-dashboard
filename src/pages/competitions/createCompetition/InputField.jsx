import React from 'react';

import { TextField } from '@mui/material';
import { FieldConfig, useField } from 'formik';

export default function InputField({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <TextField
            fullWidth
            label={label}
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        />
    );
}
