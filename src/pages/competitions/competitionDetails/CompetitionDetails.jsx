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
import DataTable from "./components/DataTable";

// ProductPage page components
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

// Data
import dataTableData from "./data/dataTableData";
import DetailedCompetitionCard from 'layouts/components/DetailedCompetitionCard';
import CompetitionInfo from './components/competitionInfo/CompetitionInfo';
import CompetitionFiles from './components/competitionFiles/CompetitionFiles';
import DetailPageCompetitionCard from 'layouts/components/DetailPageCompetitionCard';

export default function CompetitionDetails() {

    const competitionName = 'SM Linköping 2022';

    return (
        <>
            {/* <DashboardLayout> */}
            {/* <DashboardNavbar title={competitionName} /> */}
            <MDBox py={3}>
                <Card sx={{}}>
                    <MDBox p={3}>
                        <MDBox mb={2}>
                            <MDTypography variant="h5" fontWeight="medium">
                                Competition Details
                            </MDTypography>
                        </MDBox>

                        <MDBox mb={2} shadow='md' sx={{ borderRadius: 2 }}>
                            <DetailPageCompetitionCard competition={dummyComp} />
                        </MDBox>

                        <MDBox mb={2} mx={1}>
                            <CompetitionInfo competition={dummyComp} />
                        </MDBox>

                        <MDBox mb={2}>
                            <CompetitionFiles />
                        </MDBox>

                        <MDBox mt={6} mb={2}>
                            <MDBox mb={1} ml={2}>
                                <MDTypography variant="h5" fontWeight="medium">
                                    Users
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
            {/* <Footer /> */}
            {/* </DashboardLayout> */}
        </>
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