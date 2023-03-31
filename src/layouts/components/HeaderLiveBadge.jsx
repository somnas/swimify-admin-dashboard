import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

import {
    Box,
    Typography,
    keyframes
} from '@mui/material';

import { styled } from '@mui/material/styles';

export default function HeaderLiveBadge({ currentHeatObj }) {

    const params = useParams();
    const navigate = useNavigate();

    const eventName = currentHeatObj?.heat?.round?.event?.name;
    const roundName = currentHeatObj?.heat?.round?.name;

    const animation = () => {
        const pulseAnimation = keyframes`
        0% {
                transform: scale(1);
        }
        50% {
                transform: scale(1.15);
        }
        100% {
                transform: scale(1);
        }
        `;
        return `${pulseAnimation} 2s ease-in-out 0s infinite`;
    }

    const LiveDot = styled(Box)(() => ({
        position: 'absolute',
        backfaceVisibility: 'hidden',
        animation: animation(),
    }));

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
            width='160px'
            height={{ xs: '24px', md: '32px' }}
            mx={1}
            onClick={() => {
                navigate(`../competitions/${params?.competitionName}/events/heats/${currentHeatObj?.time_program_entry?.competition_session?.number}/${currentHeatObj?.time_program_entry?.oid}`);
                navigate(0);
            }}
            sx={{
                cursor: 'pointer',
                background: 'linear-gradient(#E3393C, #C53133)',
                border: '1px solid #BF3133',
                borderRadius: 1
            }}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='24px'
            >
                <LiveDot sx={{
                    width: '10px',
                    height: '10px',
                    bgcolor: '#FFF',
                    borderRadius: '9999px',
                }} />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='center'
                width='148px'
                sx={{}}>
                <Typography noWrap width='calc(100% - 4px)' mb='0.25px' lineHeight={1} color='#FFF' fontWeight={500} fontSize={'0.8rem'} sx={{}}>
                    {eventName}
                </Typography>
                <Typography noWrap width='calc(100% - 4px)' ml='1px' lineHeight={1} color='#FFF' fontWeight={300} fontSize={'0.6rem'} sx={{}}>
                    {roundName}
                </Typography>
            </Box>
        </Box>
    )
}

