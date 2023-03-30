import React from 'react';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import organizerLogo from 'assets/images/logos/organizer_logo.png';

export default function OrganizerInfo() {
    return (
        <Card sx={{ boxShadow: 'none' }}>
            <MDBox p={1} ml={1}>
                <MDTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
                    Organization Information
                </MDTypography>
            </MDBox>
            <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                <MDBox mt={1}>
                    <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                        Name
                    </MDTypography>
                    <MDBox display='flex' alignItems='center'>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            Täby Sim
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox mt={1}>
                    <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                        Nation
                    </MDTypography>
                    <MDBox display='flex' alignItems='center'>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            SWE
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox mt={1}>
                    <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                        City
                    </MDTypography>
                    <MDBox display='flex' alignItems='center' mb={0.5}>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            Täby
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox mt={1}>
                    <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                        Pool Name
                    </MDTypography>
                    <MDBox display='flex' alignItems='center' mb={0.5}>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            Tibblebadet
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox mt={1}>
                    <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                        Logo
                    </MDTypography>
                    <MDBox display='flex' alignItems='center' mb={0.5}>
                        <MDBox
                            component="img"
                            src={organizerLogo}
                            alt='organizer logo'
                            borderRadius="lg"
                            shadow="md"
                            width='48px'
                            height='48px'
                        />
                    </MDBox>
                </MDBox>
            </MDBox>
        </Card>
    );
}
