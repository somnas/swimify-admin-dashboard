import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';

export default function CompetitionDetails() {

    const competitionName = 'SM Linköping 2022';

    return (
        <DashboardLayout>
            <DashboardNavbar title={competitionName} />
            <div>CompetitionDetails</div>
        </DashboardLayout>
    );
}
