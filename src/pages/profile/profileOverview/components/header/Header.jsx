import React from 'react';

import { useNavigate } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDAvatar from 'components/MDAvatar';

// Images
import burceMars from 'assets/images/bruce-mars.jpg';

export default function Header({ children }) {

    const navigate = useNavigate();

    return (
        <MDBox mb={5}>
            <Card sx={{ py: 2, px: 2 }}>
                <Grid container spacing={3} alignItems='center'>
                    <Grid item sx={{ ml: 1 }}>
                        <MDAvatar src={burceMars} alt='profile-image' size='xl' shadow='sm' />
                    </Grid>
                    <Grid item>
                        <MDBox height='100%' mt={0.5} lineHeight={1}>
                            <MDTypography variant='h5' fontWeight='medium'>
                                Richard Davis
                            </MDTypography>
                            <MDTypography variant='button' color='text' fontWeight='regular'>
                                CEO / Co-Founder
                            </MDTypography>
                        </MDBox>
                    </Grid>
                    <Grid container item justifyContent='flex-end' mr={1} sx={{ flex: 1 }}>
                        <Button variant='grey' onClick={() => navigate('/account/account-settings')}>
                            Edit Account
                        </Button>
                    </Grid>
                </Grid>
                {children}
            </Card>
        </MDBox>
    );
}

// Setting default props for the Header
Header.defaultProps = {
    children: '',
};

// Typechecking props for the Header
Header.propTypes = {
    children: PropTypes.node,
};