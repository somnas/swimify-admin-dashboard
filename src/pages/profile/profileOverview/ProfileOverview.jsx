import React from 'react';

import { useQuery } from '@apollo/client';

// @mui material components
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';

// Overview page components
import Header from './components/header/Header';
import OrganizerInfo from './components/organizerInfo/OrganizerInfo';
import ProfileInfo from './components/profileInfo/ProfileInfo';
import { GET_COMPETITIONS, GET_USERS } from 'utils/graphql/queries';

export default function ProfileOverview() {

	const { loading, error, data } = useQuery(GET_COMPETITIONS, {
		onCompleted: data => {
			console.log(data);
		}
	});

	/* const { loading, error, data } = useQuery(GET_USERS, {
		onCompleted: data => {
			console.log(data);
		}
	}); */

	console.log(data);

	return (
		<>
			<MDBox mb={2} />
			<Header>
				<MDBox mt={4} mb={2}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={6}>
							<ProfileInfo />
						</Grid>
						<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
							<Divider orientation='vertical' sx={{ ml: -2, mr: 1 }} />
							<OrganizerInfo />
						</Grid>
					</Grid>
				</MDBox>
			</Header>
		</>
	);
}