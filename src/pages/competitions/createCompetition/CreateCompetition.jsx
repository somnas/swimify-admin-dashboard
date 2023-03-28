import React from 'react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';

export default function CreateCompetition() {
    return (
        <DashboardLayout>
            <DashboardNavbar title='Create Competition' />
            <div>CreateCompetition</div>
            <Footer />
        </DashboardLayout>
    );
}
