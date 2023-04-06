import React from 'react';

import { FieldConfig, useField, useFormikContext } from 'formik';
import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerInput({ label, ...props }) {

    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();

    return (
        <Grid item xs={12} sm={6}>
            <DatePicker
                fullWidth
                {...props}
                label={label}
                name={field.name}
                value={field.value}
                helperText={meta.error}
                error={meta.touched && Boolean(meta.error)}
                onChange={(value) => setFieldValue(field.name, value)}
            />
        </Grid>
    );
}