import React, { useState } from 'react';

import { FieldConfig, useField } from 'formik';

import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import MDInput from "components/MDInput";
import { Grid } from '@mui/material';

export default function DateInput({ input, label, ...props }) {
    
    const [field, meta] = useField(props);
    const [shrinkLabel, setShrinkLabel] = useState({ shrink: false });

    const handleChange = (value) => {
        props.onChange(value);
        if (value) {
            setShrinkLabel({ shrink: true });
        }
    };

    return (
        <Grid item xs={12} sm={6}>
            <Flatpickr
                {...props}
                onChange={(value) => handleChange(value)}
                render={({ defaultValue }, ref) => (
                    <MDInput label={label} {...input} {...field} defaultValue={defaultValue} inputRef={ref} fullWidth InputLabelProps={shrinkLabel} />
                )}
            />
        </Grid>
    );
}

// Setting default values for the props of MDDatePicker
DateInput.defaultProps = {
    input: {},
};

// Typechecking props for the DateInput
DateInput.propTypes = {
    input: PropTypes.objectOf(PropTypes.any),
};