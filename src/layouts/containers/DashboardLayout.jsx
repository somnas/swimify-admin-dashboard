import React, { useEffect } from 'react';

// react-router-dom components
import { useLocation, Outlet } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 PRO React context
import { useMaterialUIController, setLayout } from 'context';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';

export default function DashboardLayout() {

    const competitionName = 'SM Linköping 2022';

    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav } = controller;
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, 'dashboard');
    }, [pathname]);

    return (
        <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: 'relative',
                minHeight: '100vh',
                [breakpoints.up('xl')]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                    transition: transitions.create(['margin-left', 'margin-right'], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            <MDBox sx={{ paddingBottom: '2.5rem' }}>
                <DashboardNavbar title={competitionName} />
                <Outlet />
            </MDBox>
            <Footer />
        </MDBox>
    );
}