import React from 'react';

import {
    Typography,
    Box,
} from '@mui/material';

export default function StatusBadge({ status, width, height, fontSize }) {

    const statusFunction = (status, width, height) => {
        if (status === 3) {
            return statusBadge('Official', '#FFF', '#317A4D', '#255C3A', width ?? { xs: 70, sm: 80 });
        } else if (status === 2) {
            return statusBadge('LIVE', '#FFF', '#E3393C', '#C53133', width ?? { xs: 40, sm: 56 }, height);
        } else if (status === 1) {
            return statusBadge('Unofficial', '#FFF', '#49647A', '#374B5C', width ?? { xs: 70, sm: 80 });
        } else return null;
    }

    const statusBadge = (status, textColor, color1, color2, badgeWidth, badgeHeight) => {

        return (
            <Box display='flex' justifyContent='center' alignItems='center'
                width={badgeWidth}
                mx={0}
                sx={{
                    background: `linear-gradient(${color1}, ${color2})`,
                    borderRadius: 1
                }}>
                <Typography
                    display='flex'
                    alignItems='center'
                    align='center'
                    fontWeight={500}
                    fontSize={fontSize ?? { xs: '0.5rem', sm: '0.65rem', md: '0.8rem' }}
                    color={textColor}
                    px={{ xs: 1, md: 2 }}
                    height={badgeHeight ?? { xs: '20px', md: '24px' }}
                    width='fit-content'
                    sx={{}}
                >
                    {status}
                </Typography>
            </Box>
        )
    }

    return statusFunction(status, width, height, fontSize);
}
