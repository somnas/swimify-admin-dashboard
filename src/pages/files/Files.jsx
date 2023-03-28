import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';

export default function Files() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div>Files</div>
        </DashboardLayout>
    );
}
