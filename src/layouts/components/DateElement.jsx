import React from 'react';

import { Typography } from '@mui/material';

export default function DateElement(startDate, endDate, yearDayFontSize, monthFontSize) {

    //TODO: create custom styled Typography to use in dateElement to make it a smaller function

    const startDateArr = startDate?.split('-');
    const startYear = startDateArr[0];
    const startMonthName = new Date(startDate)?.toLocaleString('en-us', { month: 'short' });
    const startDay = startDateArr[2];

    const endDateArr = endDate?.split('-');
    const endYear = endDateArr[0];
    const endMonthName = new Date(endDate)?.toLocaleString('en-us', { month: 'short' });
    const endDay = endDateArr[2];

    if (startYear !== endYear) {
        return (
            <>
                <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startYear}</Typography>
                <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{startMonthName}</Typography>
                <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startDay}</Typography>
                <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>-</Typography>
                <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{endYear}</Typography>
                <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{endMonthName}</Typography>
                <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{endDay}</Typography>
            </>
        );
    }
    if (startYear === endYear) {
        if (startMonthName === endMonthName) {
            if (startDay === endDay) {
                return (
                    <>
                        <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startYear}</Typography>
                        <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{startMonthName}</Typography>
                        <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startDay}</Typography>
                    </>
                );
            } else {
                return (
                    <>
                        <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startYear}</Typography>
                        <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{startMonthName}</Typography>
                        <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startDay} - {endDay}</Typography>
                    </>
                );
            }
        } else {
            return (
                <>
                    <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startYear}</Typography>
                    <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{startMonthName}</Typography>
                    <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{startDay}</Typography>
                    <Typography lineHeight={1} fontWeight={300} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>-</Typography>
                    <Typography lineHeight={1} fontWeight={300} fontSize={monthFontSize ?? { xs: '0.40rem', sm: '0.55rem', md: '0.7rem' }} textTransform='uppercase' sx={{mb: '-0.5px', bgcolor: ''}}>{endMonthName}</Typography>
                    <Typography lineHeight={1} fontWeight={500} fontSize={yearDayFontSize ?? { xs: '0.5rem', sm: '0.75rem', md: '0.8rem' }}>{endDay}</Typography>
                </>
            );
        }
    }
}
