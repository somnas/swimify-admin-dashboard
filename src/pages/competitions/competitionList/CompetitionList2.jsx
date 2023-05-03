import React from 'react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import Card from '@mui/material/Card';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import DetailedCompetitionCard from 'layouts/components/DetailedCompetitionCard';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';

export default function CompetitionList2() {

    return (
        <>
            {/* <DashboardLayout> */}
            {/* <DashboardNavbar /> */}
            <MDBox pt={6} pb={3}>
                <Card>
                    <MDBox p={3} lineHeight={1}>
                        <MDTypography variant='h5' fontWeight='medium'>
                            Competition List
                        </MDTypography>
                        <MDTypography variant='button' color='text'>
                            Competition overview. Click on a competition to see its details.
                        </MDTypography>
                    </MDBox>
                    {dummyCompetitions.competitions.map(competition => (
                        <DetailedCompetitionCard key={competition.id} competition={competition} />
                    ))}
                </Card>
            </MDBox>
            {/* <Footer /> */}
            {/* </DashboardLayout> */}
        </>
    );
}

const dummyCompetitions = {
    "competitions": [
        {
            "id": "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9",
            "name": "New LiveTiming Competition",
            "seo_text": "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9",
            "startDate": "2019-06-10",
            "endDate": "2022-07-05",
            "large_image": "https://cdn-dev.livetiming.se/competition_files/4aaaf2e3-9026-404c-a2b9-fad19f5e37c9/54e19l4h0lajg_logo_large.png",
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Svensk Simidrott",
            "organizer_logo": null,
            "pool_name": "Lindängsbadet",
            "city": "Malmö"
        },
        {
            "id": "1e2b5559-f07e-4827-887c-5b51bca9ca2b",
            "name": "SM/Para-SM/JSM (50m) 2021",
            "seo_text": "Testtavling",
            "startDate": "2021-06-30",
            "endDate": "2021-07-04",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Svensk Simidrott & SK Laxen",
            "organizer_logo": null,
            "pool_name": "Simstadion Brottet",
            "city": "Halmstad"
        },
        {
            "id": "0fb8cfb9-715a-4e20-8942-2bb072a8a6d9",
            "name": "JSM/Sum-Sim äldre & Sum-Sim 16 år",
            "seo_text": "0fb8cfb9-715a-4e20-8942-2bb072a8a6d9",
            "startDate": "2021-07-16",
            "endDate": "2021-07-18",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Svensk Simidrott & Kungsbacka SS",
            "organizer_logo": null,
            "pool_name": "Kungsbacka badhus",
            "city": "Kungsbacka"
        },
        {
            "id": "bb534185-15c6-44a2-9aad-2e3b450b543f",
            "name": "Swedish Swim Games 2021",
            "seo_text": "bb534185-15c6-44a2-9aad-2e3b450b543f",
            "startDate": "2021-09-24",
            "endDate": "2021-09-26",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Väsby SS",
            "organizer_logo": null,
            "pool_name": "Vilundabadet",
            "city": "Upplands-Väsby"
        },
        {
            "id": "c82ecd36-3dc7-4b2a-a287-0373623f75f7",
            "name": "Sum-Sim Regionfinal 2021, Stockholm",
            "seo_text": "c82ecd36-3dc7-4b2a-a287-0373623f75f7",
            "startDate": "2021-11-13",
            "endDate": "2021-11-14",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "2",
            "organizer_logo": null,
            "pool_name": "1",
            "city": "4"
        },
        {
            "id": "e6b5f336-40dd-4329-a53a-dae5d8fb8904",
            "name": "Sum-Sim riksfinal 2021",
            "seo_text": "e6b5f336-40dd-4329-a53a-dae5d8fb8904",
            "startDate": "2021-12-10",
            "endDate": "2021-12-12",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Svensk Simidrott & Spårvägen SF",
            "organizer_logo": null,
            "pool_name": "Eriksdalsbadet",
            "city": "Stockholm"
        },
        {
            "id": "9d644d5d-f8a5-4dea-b5bc-8d8c23c46cd3",
            "name": "UGP 2 2022, Eriksdalsbadet",
            "seo_text": "UGP-2-2022-Eriksdalsbadet",
            "startDate": "2022-03-12",
            "endDate": "2022-03-13",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "SDF & Spårvägen Simförening",
            "organizer_logo": null,
            "pool_name": "Eriksdalsbadet",
            "city": "Stockholm"
        },
        {
            "id": "1b120591-aa2d-4e8a-acf7-dbeafbe85db3",
            "name": "Malmsten Swim Open Stockholm 2022",
            "seo_text": "Malmsten-Swim-Open-Stockholm-2022",
            "startDate": "2022-04-08",
            "endDate": "2022-04-12",
            "large_image": null,
            "small_image": null,
            "nation_code": "SWE",
            "organizer": "Swedish Swimming Federation",
            "organizer_logo": null,
            "pool_name": "Eriksdalsbadet",
            "city": "Stockholm"
        },
        {
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
        }
    ]
};