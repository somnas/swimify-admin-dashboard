import React from 'react';

import Footer from 'layouts/components/Footer';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import DataTable from '../DataTable';
import filesTableData from '../../data/filesTableData';

export default function CompetitionFiles() {
    return (
        <MDBox>
            <MDTypography>Competition files</MDTypography>
            <DataTable
                table={filesTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
            />
        </MDBox>
    );
}
