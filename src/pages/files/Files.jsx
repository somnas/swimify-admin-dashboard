import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';
import Footer from 'layouts/components/Footer';

export default function Files() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div>Files</div>
            <Footer />
        </DashboardLayout>
    );
}
