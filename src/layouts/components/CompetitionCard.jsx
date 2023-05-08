import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import compImg from 'assets/images/sumsim_logo_small.png';
import organizer_logo from 'assets/images/logos/organizer_logo.png';
import flag from 'assets/images/logos/SE.svg';

export default function CompetitionCard({ competition }) {

    console.log(competition);

    const navigate = useNavigate();

    const { id, startDate, endDate, name, seo_text, organizer, city, pool_name } = competition;

    //const compImg = competition?.small_image || '/img/competition-img-small-placeholder.png';

    const dateArr = startDate.split('-');
    const year = dateArr[0];
    const day = dateArr[2];

    const monthName = new Date(startDate).toLocaleString('en-us', { month: 'short' });

    const handleNavigation = () => {
        if (window.location.hostname === 'test.swimify.com') return window.location.href = `https://test.swimify.com/competitions/${seo_text}`;
        if (competition?.database_region === 2) return window.location.href = `https://live.swimify.com/competitions/${seo_text}`;
        if (competition?.database_region === 3) return window.location.href = `https://au.swimify.com/competitions/${seo_text}`;
        else navigate(`/competitions/${seo_text}`);
    };

    return (
        <Grid
            container item
            wrap='nowrap' alignItems='center' height={{ xs: 36, md: 44 }}
            sx={{
                width: { xs: '100%', /* md: 'calc(50vw - 16px)' */ },
                //maxWidth: { md: 800 },
                //borderStyle: 'none none solid none',
                borderTopStyle: 'solid',
                borderWidth: 1,
                borderColor: '#D0D5DD',
                cursor: 'pointer',
                cursor: 'pointer'
            }}
            onClick={() => {
                //storeCompetitionId(seo_text, id);
                handleNavigation();
            }}
        >
            <Grid container item xs={6} width='100%' sx={{ bgcolor: '' }}>
                {compImg &&
                    <Grid item width={56} height={28} my='auto' ml={{ xs: 0.5, sm: 1 }} sx={{ bgcolor: '' }}>
                        <Box component='img' src={compImg} width={56} height={28} sx={{ borderRadius: 1, boxShadow: 3, objectFit: 'cover' }} />
                    </Grid>
                }
                <Grid item gap={{ xs: 0.25, md: 0.5 }} ml={1}
                    width={compImg ? 'calc(100% - 80px)' : 'calc(100% - 16px)'}
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: '' }}>
                    <Typography noWrap sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' }, lineHeight: 1 }}>{name}</Typography>
                    <Box display='flex' alignItems='center' gap={{ xs: 0.35, sm: 0.6 }} sx={{ bgcolor: '' }}>
                        {/* {DateElement(startDate, endDate)} */}
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={6} width='100%' sx={{ bgcolor: '' }}>
                <Grid container item display='flex' xs={6} gap={{ xs: 0.5, sm: 0.5 }} my='auto' sx={{ bgcolor: '' }}>
                    <Box height={28} width={28} sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <Box component='img' height={28} width={28} src={organizer_logo} sx={{ borderRadius: 2 }} />
                    </Box>
                    <Box width={{ xs: 'calc(100% - 36px)', md: 'calc(100% - 40px)' }} maxWidth={340} my='auto' sx={{ bgcolor: '' }}>
                        <Typography noWrap lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.75rem' } }}>{organizer}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} my='auto' sx={{ bgcolor: '' }}>
                    <Box display='flex' justifyContent='flex-start' alignItems='center' gap={{ xs: 0.5, sm: 1 }} sx={{ bgcolor: '' }}>
                        <Box display='flex' flexDirection='column' justifyContent='center' gap={0.25} width={{ xs: 'calc(100% - 24px)', sm: 'calc(100% - 28px)', md: 'calc(100% - 8px)' }} maxWidth={352} sx={{ bgcolor: '' }}>
                            <Typography noWrap lineHeight={1} sx={{ fontWeight: 500, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.8rem' } }}>{pool_name}</Typography>
                            <Box display='flex' alignItems='center' gap={0.5} sx={{ bgcolor: '' }}>
                                <Box width={16} height={12} display='flex' alignItems='center' sx={{ boxShadow: 2, borderRadius: 1, bgcolor: '' }}>
                                    <Box component='img' src={flag ? flag : '/img/img-placeholder-square_48.png'} sx={{ borderRadius: 1, height: '12px', width: '16px' }} />
                                </Box>
                                <Typography noWrap lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.75rem' } }}>{city}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}