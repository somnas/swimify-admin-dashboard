import React from 'react';

import ContentLoader from 'react-content-loader';

import {
    Box,
    useMediaQuery
} from '@mui/material';

export default function Loader() {

    const boxHeight = useMediaQuery('(max-width:899px)') ? 36 : 44;
    const imgHeight = useMediaQuery('(max-width:899px)') ? 44 : 44;
    const imgWidth = useMediaQuery('(max-width:899px)') ? 88 : 88;
    const imgYOffset = useMediaQuery('(max-width:899px)') ? 4 : 8;
    const largeRecYOffset = useMediaQuery('(max-width:899px)') ? 12 : 16;
    const smallRecYOffset = useMediaQuery('(max-width:899px)') ? 32 : 36;
    const xTransform = useMediaQuery('(max-width:899px)') ? 52 : 60;

    const foregroundColor = '#F2F4F7'
    const backgroundColor = '#E4E7EC'

    return (
        <Box py={6}>
            <Box display='flex' my='auto' height={{ xs: 52, md: 60 }}>
                <ContentLoader
                    speed={1}
                    width={'100%'}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect x='8' y={imgYOffset} rx='4' ry='4' width={imgWidth} height={imgHeight} />
                    <rect x='112' y={largeRecYOffset} rx='4' ry='4' width='30%' height='16' />
                    <rect x='112' y={smallRecYOffset} rx='4' ry='4' width='25%' height='8' />
                    
                    <rect x='50%' y='8' rx='4' ry='4' width={boxHeight} height={boxHeight} />
                    <rect x='50%' y={largeRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='30%' height='16' />
                    <rect x='50%' y={smallRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='25%' height='8' />
                </ContentLoader>
            </Box>
            <Box display='flex' my='auto' height={{ xs: 52, md: 60 }}>
                <ContentLoader
                    speed={1}
                    width={'100%'}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect x='8' y={imgYOffset} rx='4' ry='4' width={imgWidth} height={imgHeight} />
                    <rect x='112' y={largeRecYOffset} rx='4' ry='4' width='30%' height='16' />
                    <rect x='112' y={smallRecYOffset} rx='4' ry='4' width='25%' height='8' />
                    
                    <rect x='50%' y='8' rx='4' ry='4' width={boxHeight} height={boxHeight} />
                    <rect x='50%' y={largeRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='30%' height='16' />
                    <rect x='50%' y={smallRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='25%' height='8' />
                </ContentLoader>
            </Box>
            <Box display='flex' my='auto' height={{ xs: 52, md: 60 }}>
                <ContentLoader
                    speed={1}
                    width={'100%'}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect x='8' y={imgYOffset} rx='4' ry='4' width={imgWidth} height={imgHeight} />
                    <rect x='112' y={largeRecYOffset} rx='4' ry='4' width='30%' height='16' />
                    <rect x='112' y={smallRecYOffset} rx='4' ry='4' width='25%' height='8' />
                    
                    <rect x='50%' y='8' rx='4' ry='4' width={boxHeight} height={boxHeight} />
                    <rect x='50%' y={largeRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='30%' height='16' />
                    <rect x='50%' y={smallRecYOffset} transform={`translate(${xTransform}, 0)`} rx='4' ry='4' width='25%' height='8' />
                </ContentLoader>
            </Box>
        </Box>
    );
}
