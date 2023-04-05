import React, { useState } from 'react';

import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import MDInput from "components/MDInput";
import { Grid } from '@mui/material';

export default function DateInput({ input, label, ...rest }) {

    const [selectedDate, setSelectedDate] = useState('');
    console.log(selectedDate);

    const labelProps = {
        shrink: selectedDate ? true : false
    };

    return (
        <Grid item xs={12} sm={6}>
            <Flatpickr
                {...rest}
                onChange={(e) => setSelectedDate(e)}
                render={({ defaultValue }, ref) => (
                    <MDInput label={label} {...input} defaultValue={defaultValue} inputRef={ref} fullWidth InputLabelProps={labelProps} />
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