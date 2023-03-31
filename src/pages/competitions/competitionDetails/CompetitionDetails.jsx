import React from 'react';

import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import DashboardLayout from 'layouts/containers/DashboardLayout';
import Footer from 'layouts/components/Footer';

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

// Data
import dataTableData from "./data/dataTableData";
import DetailedCompetitionCard from 'layouts/components/DetailedCompetitionCard';
import CompetitionInfo from './components/competitionInfo/CompetitionInfo';

export default function CompetitionDetails() {

    const competitionName = 'SM Linköping 2022';

    return (
        <DashboardLayout>
            <DashboardNavbar title={competitionName} />
            <MDBox py={3}>
                <Card sx={{ overflow: "visible" }}>
                    <MDBox p={3}>
                        <MDBox mb={3}>
                            <MDTypography variant="h5" fontWeight="medium">
                                Competition Details
                            </MDTypography>
                        </MDBox>

                        <Grid container spacing={1}>
                            <Grid item xs={12} sx={{ bgcolor: '' }}>
                                <MDBox shadow='md' sx={{ borderRadius: 2 }}>
                                    <DetailedCompetitionCard competition={dummyComp} index={0} />
                                </MDBox>
                            </Grid>
                            <Grid item xs={12} sx={{}}>
                                <CompetitionInfo />
                            </Grid>
                        </Grid>

                        <MDBox mt={8} mb={2}>
                            <MDBox mb={1} ml={2}>
                                <MDTypography variant="h5" fontWeight="medium">
                                    Other Products
                                </MDTypography>
                            </MDBox>
                            <DataTable
                                table={dataTableData}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                isSorted={false}
                            />
                        </MDBox>
                    </MDBox>
                </Card>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

const dummyComp = {
    "id": "c7063ba4-24bf-4bbe-9d80-1440026e2831",
    "name": "SM/Para-SM/JSM (50m) 2019",
    "seo_text": "SM-Para-SM-JSM-50m-2019",
    "startDate": "2022-09-12",
    "endDate": "2022-09-20",
    "large_image": "https://cdn-dev.livetiming.se/competition_files/c7063ba4-24bf-4bbe-9d80-1440026e2831/5cuw9l5nun477_logo_large.png",
    "small_image": "https://cdn-dev.livetiming.se/competition_files/c7063ba4-24bf-4bbe-9d80-1440026e2831/5cuw9l5nun5en_logo_small.png",
    "nation_code": "SWE",
    "organizer": "Svensk Simidrott",
    "organizer_logo": "https://cdn-dev.livetiming.se/competition_files/c7063ba4-24bf-4bbe-9d80-1440026e2831/5r0np9l76aks9l_organizer_logo.png",
    "pool_name": "Lindängsbadet",
    "city": "Malmö"
};