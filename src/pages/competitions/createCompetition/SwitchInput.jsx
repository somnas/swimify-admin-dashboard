import React, { useState } from 'react';

import { Grid, Switch, Box, FormControlLabel, Typography } from '@mui/material';

export default function SwitchInput({ label, setChecked }) {

    //const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #d2d6da', borderRadius: 1.5, py: 0.2, /* p: '0.75rem', */ }}>
                <Typography fontSize='0.875rem' fontWeight={400} sx={{ bgcolor: '', ml: '12px', }}>{label}</Typography>
                <Switch
                    //checked={checked}
                    onChange={handleChange}
                    disableRipple
                    sx={{ bgcolor: '' }}
                />
            </Box>
        </Grid>
    );
}
