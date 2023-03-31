import React from 'react';

import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { Grid } from '@mui/material';

export default function CompetitionInfo({ competition }) {

    //console.log(competition);

    return (
        <Grid container>
            <Grid container item xs={12} md={6} lg={4}>
                <MDBox pt={1} pb={2} lineHeight={1.25}>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Name
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.name}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Start date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.startDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            End date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.endDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
                <MDBox pt={1} pb={2} lineHeight={1.25}>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Name
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.name}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Start date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.startDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            End date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.endDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
                <MDBox pt={1} pb={2} lineHeight={1.25}>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Name
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.name}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            Start date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.startDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={1}>
                        <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                            End date
                        </MDTypography>
                        <MDBox display='flex' alignItems='center' mb={0.5}>
                            <MDTypography variant='button' fontWeight='regular' color='text'>
                                {competition.endDate}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Grid>
        </Grid>
    );
}
