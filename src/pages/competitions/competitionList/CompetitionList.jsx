import React from 'react';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import DataTable from 'layouts/components/dataTable/DataTable';

// Data
import dataTableData from './data/dataTableData';

export default function CompetitionList() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Card>
                    <MDBox p={3} lineHeight={1}>
                        <MDTypography variant='h5' fontWeight='medium'>
                            Datatable Search
                        </MDTypography>
                        <MDTypography variant='button' color='text'>
                            A lightweight, extendable, dependency-free javascript HTML table plugin.
                        </MDTypography>
                    </MDBox>
                    <DataTable table={dataTableData} canSearch />
                </Card>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}
