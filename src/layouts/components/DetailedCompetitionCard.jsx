import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Typography,
    Box,
    Grid,
    useMediaQuery
} from '@mui/material';

import DateElement from './DateElement';
import StatusBadge from './StatusBadge';
import smallCompImg from 'assets/images/sumsim_logo_small.png';
import organizer_logo from 'assets/images/logos/organizer_logo.png';
import flag from 'assets/images/logos/SE.svg';

export default function DetailedCompetitionCard({ competition, index }) {

    const { startDate, endDate, name, seo_text, organizer } = competition;
    //const smallCompImg = competition?.small_image;

    const navigate = useNavigate();

    const handleNavigation = () => {
        if (window.location.hostname === 'test.swimify.com') return window.location.href = `https://test.swimify.com/competitions/${seo_text}`;
        if (competition?.database_region === 2) return window.location.href = `https://live.swimify.com/competitions/${seo_text}`;
        if (competition?.database_region === 3) return window.location.href = `https://au.swimify.com/competitions/${seo_text}`;
        else navigate(`/competitions/${seo_text}`);
    };

    const currentDate = new Date().toLocaleDateString('sv-SE');

    const status = () => {
        if (startDate <= currentDate && endDate >= currentDate) {
            return <StatusBadge status={2} />;
        }
    };

    return (
        <>
            <Grid
                container
                gap={0} wrap='nowrap' alignItems='center'
                height={{ xs: 36, sm: 60, md: 60 }}
                sx={{ width: /* { xs: 'calc(100vw - 16px)', md: 'calc(100vw - 32px)' } */ '100%', maxWidth: 1600, cursor: 'pointer', borderTopStyle: index !== 0 && 'solid', borderWidth: 1, borderColor: '#D0D5DD' }}
                onClick={() => handleNavigation()}
            >
                {/* CONTAINER LEFT HALF */}
                <Grid container item xs={6} sx={{ bgcolor: '' }}>
                    <Grid item display='flex' my='auto' width={{ xs: 104 }} sx={{ bgcolor: '' }}>
                        {/* COMPETITION IMAGE */}
                        <Box width={88} height={44} ml={{ xs: 0.5, md: 1 }} sx={{ borderRadius: 1, boxShadow: 3, }}>
                            <Box component='img' width={88} height={44} src={smallCompImg ? smallCompImg : '/img/competition-img-small-placeholder.png'} sx={{ borderRadius: 1 }} />
                        </Box>
                    </Grid>
                    {/* COMPETITION NAME */}
                    <Grid item display='flex' justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems={{ xs: 'flex-start', md: 'center' }} flexDirection={{ xs: 'column', md: 'row' }} width='206px' maxWidth={510} gap={{ xs: 0.35, sm: 0.6 }} sx={{ bgcolor: '' }}>
                        <Typography noWrap sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.2rem' }, lineHeight: 1 }}>{name}</Typography>
                        {useMediaQuery('(max-width:899px)') && <Box display='flex' my='auto' gap={{ xs: 0.35, sm: 0.5 }} sx={{ bgcolor: '' }}>{DateElement(startDate, endDate)}</Box>}
                    </Grid>
                    {useMediaQuery('(min-width:900px)') &&
                        <Grid item container display='flex' alignItems='center' width='172px' maxWidth={186} sx={{ bgcolor: '' }}>
                            <Box ml={1} display='flex' alignItems='center' gap={0.5}>
                                {DateElement(startDate, endDate)}
                            </Box>
                        </Grid>
                    }
                </Grid>

                {/* CONTAINER RIGHT HALF */}
                <Grid container display='flex' item xs={6} sx={{ bgcolor: '' }}>
                    <Grid container item display='flex' width={{ xs: 'calc(50% - 36px)', sm: 'calc(50% - 23px)', md: 'calc(50% - 34px)' }} maxWidth={356} my='auto' sx={{ bgcolor: '' }}>
                        <Box display='flex' sx={{ bgcolor: '' }}>
                            <Box sx={{ boxShadow: 3, borderRadius: 2, height: '44px', width: '44px' }}>
                                <Box component='img' src={organizer_logo ? organizer_logo : '/img/img-placeholder-square_48.png'} sx={{ borderRadius: 2, height: '44px', width: '44px' }} />
                            </Box>
                        </Box>
                        <Box width='calc(100% - 48px)' my='auto' sx={{ bgcolor: '' }}>
                            <Typography noWrap ml={1} lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.9rem' } }}>{organizer}</Typography>
                        </Box>
                    </Grid>
                    <Grid item container display='flex' width={{ xs: 'calc(50% - 36px)', sm: 'calc(50% - 23px)', md: 'calc(50% - 34px)' }} maxWidth={356} justifyContent='flex-start' alignItems='center' gap={{ xs: 0.5, sm: 1 }} sx={{ bgcolor: '' }}>
                        <Box width={{ xs: 20, sm: 32 }} height={{ xs: 15, sm: 24 }} sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '' }}>
                            <Box component='img' src={flag ? flag : '/img/img-placeholder-square_48.png'} sx={{ borderRadius: 1, height: '24px', width: '32px' }} />
                        </Box>
                        <Box display='flex' flexDirection='column' justifyContent='center' gap={0.125} width={{ xs: 'calc(100% - 44px)', md: 'calc(100% - 48px)' }} sx={{ bgcolor: '' }}>
                            <Typography noWrap lineHeight={1} sx={{ fontWeight: 500, fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.9rem' } }}>{competition?.pool_name}</Typography>
                            <Typography noWrap lineHeight={1} sx={{ fontWeight: 300, fontSize: { xs: '0.5rem', sm: '0.65rem', md: '0.75rem' } }}>{competition?.city}</Typography>
                        </Box>
                    </Grid>
                    <Grid item container width={{ xs: '72px', sm: '46px', md: '68px' }} display='flex' my='auto' justifyContent='flex-start' sx={{ bgcolor: '' }}>
                        <Box mr={{ xs: 0, md: 0 }} sx={{ bgcolor: '' }}>
                            {status()}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
