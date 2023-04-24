import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';

// @mui icons
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import AuthenticationLayout from 'layouts/containers/AuthenticationLayout';

// Images
import bgImage from 'assets/images/swimmer_1280.jpg';

export default function SignIn() {

	const [email, setEmail] = useState(process.env.REACT_APP_USER_EMAIL);
	const [password, setPassword] = useState(process.env.REACT_APP_USER_PW);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	async function signIn() {
		try {
			setLoading(true);
			const user = await Auth.signIn(email, password);
			console.log(user);
			navigate('/dashboard');
		} catch (error) {
			setLoading(false);
			console.log('error signing in', error);
		}
	}

	const [rememberMe, setRememberMe] = useState(false);

	const handleSetRememberMe = () => setRememberMe(!rememberMe);

	return (
		<AuthenticationLayout image={bgImage}>
			<Card>
				<MDBox
					variant='gradient'
					bgColor='secondary'
					borderRadius='lg'
					coloredShadow='dark'
					mx={2}
					mt={-3}
					p={2}
					mb={1}
					textAlign='center'
				>
					<MDTypography variant='h4' fontWeight='medium' color='white' mt={1}>
						Sign in
					</MDTypography>
					<Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 2 }}>
						<Grid item xs={3}>
							<MDTypography component={MuiLink} href='#' variant='body1' color='white'>
								<AppleIcon color='inherit' />
							</MDTypography>
						</Grid>
						<Grid item xs={3}>
							<MDTypography component={MuiLink} href='#' variant='body1' color='white'>
								<GoogleIcon color='inherit' />
							</MDTypography>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox pt={4} pb={3} px={3}>
					<MDBox component='form' role='form'>
						<MDBox mb={2}>
							<MDInput type='email' label='Email' fullWidth onChange={(e) => setEmail(e.target.value)} value={email} />
						</MDBox>
						<MDBox mb={2}>
							<MDInput type='password' label='Password' fullWidth onChange={(e) => setPassword(e.target.value)} value={password} />
						</MDBox>
						<MDBox display='flex' alignItems='center' ml={-1}>
							<Switch checked={rememberMe} onChange={handleSetRememberMe} />
							<MDTypography
								variant='button'
								fontWeight='regular'
								color='text'
								onClick={handleSetRememberMe}
								sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
							>
								&nbsp;&nbsp;Remember me
							</MDTypography>
						</MDBox>
						<MDBox mt={4} mb={1}>
							<MDButton variant='gradient' disabled={loading} color={'dark'} fullWidth onClick={() => signIn(email, password)}>
								sign in
							</MDButton>
						</MDBox>
						<MDBox mt={3} mb={1} textAlign='center'>
							<MDTypography variant='button' color='text'>
								Don&apos;t have an account?{' '}
								<MDTypography
									component={Link}
									to='/authentication/sign-up/cover'
									variant='button'
									color='dark'
									fontWeight='medium'
									textGradient
								>
									Sign up
								</MDTypography>
							</MDTypography>
						</MDBox>
					</MDBox>
				</MDBox>
			</Card>
		</AuthenticationLayout>
	);
}