import React, { useState, useEffect } from 'react';

import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import './liveCompetitionCard.css';
import StatusBadge from 'layouts/components/StatusBadge';
import HeaderLiveBadge from 'layouts/components/HeaderLiveBadge';
import smallCompImg from 'assets/images/sumsim_logo_small.png';
import organizer_logo from 'assets/images/logos/organizer_logo.png';
import flag from 'assets/images/logos/SE.svg';

export default function DetailPageCompetitionCard({ competition, currentHeatObj, currentHeatUpdateThreshold }) {

    const currentDate = new Date().toLocaleDateString('sv-SE');

    const { startDate, endDate, name, organizer } = competition;

    const [liveCompetition, setLiveCompetition] = useState(false);

    //const smallCompImg = competition?.small_image;

    const dateArr = startDate.split('-');
    const year = dateArr[0];
    const day = dateArr[2];

    const monthName = new Date(startDate).toLocaleString('en-us', { month: 'short' });

    useEffect(() => {
        if (startDate <= currentDate && endDate >= currentDate) {
            setLiveCompetition(true);
        }
    }, []);

    const handleLiveBadge = () => {
        if (liveCompetition && currentHeatObj?.heat?.round?.event?.name && new Date().getTime() < currentHeatUpdateThreshold) {
            return <HeaderLiveBadge currentHeatObj={currentHeatObj} />;
        } else if (liveCompetition) {
            return (
                <Box display='flex' width='162px' mx={1} alignItems='center' justifyContent='flex-end' sx={{ bgcolor: '' }}>
                    <StatusBadge status={2} />
                </Box>
            );
        } else return null;
    };

    return (
        <Grid
            container
            wrap='nowrap' alignItems='center' height={60}
            py={{ xs: 0.5, md: 1 }}
            sx={{ /* width: { xs: 'calc(100vw - 16px)', md: 'calc(100vw - 32px)' }, */ maxWidth: 1600, /* borderTopStyle: 'solid', borderWidth: 1, borderColor: '#D0D5DD' */ }}
        >
            <Grid container item xs={liveCompetition ? 5 : 6} width='100%' sx={{ bgcolor: '' }}>
                <Box width={88} height={44} ml={{ xs: 0.5, md: 1 }} sx={{ borderRadius: 1, boxShadow: 3 }}>
                    <Box component='img' width={88} height={44} src={smallCompImg ? smallCompImg : '/img/competition-img-small-placeholder.png'} sx={{ borderRadius: 1 }} />
                </Box>
                <Box width={{ xs: 36, sm: 44, md: 60 }} height={{ xs: 36, sm: 44 }} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' my='auto' sx={{ bgcolor: '' }}>
                    <Typography sx={{ textTransform: 'uppercase', fontWeight: 300, fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.75rem' }, lineHeight: 1 }}>{monthName}</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' }, lineHeight: 1, mt: 0.1 }}>{day}</Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, lineHeight: 1 }}>{year}</Typography>
                </Box>
                <Box
                    width={{ /* xs: 'calc(50vw - 140px)', sm: liveCompetition ? 'calc(100% - 136px)' : 'calc(50vw - 152px)', md: liveCompetition ? 'calc(100% - 156px)' : 'calc(50vw - 180px)' */ }}
                    maxWidth={620} my='auto'
                    sx={{ bgcolor: '' }}>
                    <Typography noWrap sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '1rem', md: '1.2rem' }, lineHeight: 1 }}>{name}</Typography>
                </Box>
            </Grid>
            <Grid container item xs={liveCompetition ? 7 : 6} sx={{ bgcolor: '' }}>
                <Grid container item xs={liveCompetition ? 5 : 6} gap={{ xs: 0.5, sm: 1 }} my='auto' sx={{ bgcolor: '' }}>
                    <Box sx={{ height: '44px', width: '44px', boxShadow: 3, borderRadius: 2 }}>
                        <Box component='img' width={44} height={44} src={organizer_logo ? organizer_logo : '/img/img-placeholder-square_48.png'} sx={{ borderRadius: 2 }} />
                    </Box>
                    <Box display='flex' my='auto' width='calc(100% - 55px)' sx={{ bgcolor: '' }}>
                        <Typography noWrap lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.9rem' } }}>{organizer}</Typography>
                    </Box>
                </Grid>
                <Grid container item xs={liveCompetition ? 7 : 6} my='auto' sx={{ bgcolor: '' }}>
                    <Box display='flex' justifyContent='flex-start' alignItems='center' gap={{ xs: 0.5, sm: 1 }} width={liveCompetition ? 'calc(100% - 178px)' : '100%'} sx={{ bgcolor: '' }}>
                        <Box width={{ xs: 20, sm: 32 }} height={{ xs: 15, sm: 24 }} sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '' }}>
                            <Box component='img' src={flag ? flag : '/img/img-placeholder-square_48.png'} sx={{ borderRadius: 1, height: '24px', width: '32px' }} />
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' gap={0.125} width='calc(100% - 44px)' sx={{ bgcolor: '' }}>
                            <Box display='flex' flexDirection='column' justifyContent='center' width='100%' sx={{ bgcolor: '' }}>
                                <Typography noWrap lineHeight={1} sx={{ fontWeight: 500, fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.9rem' } }}>{competition?.pool_name}</Typography>
                                <Typography noWrap lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.75rem' } }}>{competition?.city}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {handleLiveBadge()}
                </Grid>
            </Grid>
        </Grid>
    );
}