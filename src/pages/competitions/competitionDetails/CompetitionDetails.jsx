import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';

export default function CompetitionDetails() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div>CompetitionDetails</div>
        </DashboardLayout>
    );
}
