import React from 'react';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

export default function ProfileInfo() {
    return (
        <Card sx={{ boxShadow: 'none' }}>
            <MDBox p={2}>
                <MDTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
                    Profile information
                </MDTypography>
            </MDBox>
            <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                    Name
                </MDTypography>
                <MDBox display='flex' alignItems='center' mb={0.5} /* ml={-1.5} */>
                    <MDBox mt={0.5}>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            Erik Eriksson
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                    Email
                </MDTypography>
                <MDBox display='flex' alignItems='center' mb={0.5} /* ml={-1.5} */>
                    <MDBox mt={0.5}>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            erik.eriksson@gmail.com
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
                    Mobile
                </MDTypography>
                <MDBox display='flex' alignItems='center' mb={0.5}>
                    <MDBox mt={0.5}>
                        <MDTypography variant='button' fontWeight='regular' color='text'>
                            +46 70 - 123 456 89
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </MDBox>
        </Card>
    );
}