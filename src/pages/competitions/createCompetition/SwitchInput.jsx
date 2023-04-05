import React, { useState } from 'react';

import { Grid, Switch, Box } from '@mui/material';

export default function SwitchInput() {

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Grid item xs={12} sm={6}>
            <Box sx={{ border: '1px solid #d2d6da', borderRadius: 1.5, py: 0.2 }}>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    disableRipple
                />
            </Box>
        </Grid>
    );
}
