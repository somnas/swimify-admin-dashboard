import React from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 PRO React base styles
import typography from 'assets/theme/base/typography';

export default function Footer({ light }) {

    const { size } = typography;

    return (
        <Box sx={{ position: 'absolute', bottom: 0, height: '2.5rem' }}>
            <MDBox
                width='100%'
                display='flex'
                flexDirection={{ xs: 'column', lg: 'row' }}
                justifyContent='space-between'
                alignItems='center'
                px={1.5}
            >
                <MDBox
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexWrap='wrap'
                    color={light ? 'white' : 'text'}
                    fontSize={size.sm}
                >
                    &copy; {new Date().getFullYear()}
                    <Link href='https://www.swimify.com/' target='_blank'>
                        <MDTypography variant='button' fontWeight='medium' color={light ? 'white' : 'dark'}>
                            &nbsp;Swimify,&nbsp;
                        </MDTypography>
                    </Link>
                    a part of IC Control Media & Sport
                </MDBox>
                <MDBox
                    component='ul'
                    sx={({ breakpoints }) => ({
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        listStyle: 'none',
                        mt: 3,
                        mb: 0,
                        p: 0,

                        [breakpoints.up('lg')]: {
                            mt: 0,
                        },
                    })}
                >
                    <MDBox component='li' pr={2} lineHeight={1}>
                        <Link href='https://www.swimify.com/' target='_blank'>
                            <MDTypography
                                variant='button'
                                fontWeight='regular'
                                color={light ? 'white' : 'dark'}
                            >
                                Swimify
                            </MDTypography>
                        </Link>
                    </MDBox>
                    <MDBox component='li' px={2} lineHeight={1}>
                        <Link href='https://www.iccmediasport.com/en/about-us/' target='_blank'>
                            <MDTypography
                                variant='button'
                                fontWeight='regular'
                                color={light ? 'white' : 'dark'}
                            >
                                About Us
                            </MDTypography>
                        </Link>
                    </MDBox>
                    <MDBox component='li' pl={2} lineHeight={1}>
                        <Link href='https://support.swimify.com/en-US' target='_blank'>
                            <MDTypography
                                variant='button'
                                fontWeight='regular'
                                color={light ? 'white' : 'dark'}
                            >
                                Support
                            </MDTypography>
                        </Link>
                    </MDBox>
                </MDBox>
            </MDBox>
        </Box>
    );
}

// Setting default props for the Footer
Footer.defaultProps = {
    light: false
};

// Typechecking props for the Footer
Footer.propTypes = {
    light: PropTypes.bool
};