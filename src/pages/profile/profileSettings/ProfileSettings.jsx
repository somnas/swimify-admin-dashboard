import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';
import Footer from 'layouts/components/Footer';

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';

// Settings page components
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import ChangePassword from './components/ChangePassword';
import Authentication from './components/Authentication';
import Accounts from './components/Accounts';
import Notifications from './components/Notifications';
import Sessions from './components/Sessions';
import DeleteAccount from './components/DeleteAccount';

export default function ProfileSettings() {
    return (
        <>
            <MDBox mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <Sidenav />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <MDBox mb={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Header />
                                </Grid>
                                <Grid item xs={12}>
                                    <BasicInfo />
                                </Grid>
                                <Grid item xs={12}>
                                    <ChangePassword />
                                </Grid>
                                <Grid item xs={12}>
                                    <Authentication />
                                </Grid>
                                <Grid item xs={12}>
                                    <Accounts />
                                </Grid>
                                <Grid item xs={12}>
                                    <Notifications />
                                </Grid>
                                <Grid item xs={12}>
                                    <Sessions />
                                </Grid>
                                <Grid item xs={12}>
                                    <DeleteAccount />
                                </Grid>
                            </Grid>
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
        </>
    );
}
