import React from 'react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import InputField from './InputField';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import FormField from './components/FormField';

import * as yup from 'yup';
import StepperForm, { FormStep } from './StepperForm';

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required')
});

export default function CreateCompNew() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mt={5} mb={9}>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} lg={8}>
                        <MDBox mt={6} mb={8} textAlign='center'>
                            <MDBox mb={1}>
                                <MDTypography variant='h3' fontWeight='bold'>
                                    Create a competition
                                </MDTypography>
                            </MDBox>
                            <MDTypography variant='h5' fontWeight='regular' color='secondary'>
                                Follow the steps below to create a new competition.
                            </MDTypography>
                        </MDBox>
                        <Card>
                            <MDBox p={2}>
                                <MDBox>
                                    <StepperForm
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            street: '',
                                            city: '',
                                        }}
                                        onSubmit={values => {
                                            console.log(values);
                                        }}
                                    >
                                        <FormStep
                                            stepName='Organizer'
                                            onSubmit={() => console.log('Step 1 submit')}
                                            validationSchema={validationSchema}
                                        >
                                            <MDBox mt={3}>
                                                <Grid container spacing={3}>
                                                    <InputField name='organizer_name' label='Organizer Name' />
                                                    <InputField name='organizer_logo' label='Organizer Logo' />
                                                    <InputField name='contact_person_first_name' label='Contact Person First Name' />
                                                    <InputField name='contact_person_last_name' label='Contact Person Last Name' />
                                                    <InputField name='contact_person_email' label='Contact Person Email' />
                                                    <InputField name='contact_person_phone' label='Contact Person Phone' />
                                                </Grid>
                                            </MDBox>
                                        </FormStep>
                                        <FormStep
                                            stepName='Competition'
                                            onSubmit={() => console.log('Step 2 submit')}
                                            validationSchema={yup.object({
                                                street: yup.string().required('Street is required'),
                                                city: yup.string().required('City is required')
                                            })}
                                        >
                                            <MDBox mt={3}>
                                                <Grid container spacing={3}>
                                                    <InputField name='competition_name' label='Competition Name' />
                                                    <InputField name='competition_image' label='Competition Image' />
                                                    <InputField name='nation' label='Nation' />
                                                    <InputField name='city' label='City' />
                                                    <InputField name='pool_name' label='Pool Name' />
                                                    <InputField name='start_date' label='Start Date' />
                                                    <InputField name='end_date' label='End Date' />
                                                    <InputField name='superlive' label='Superlive' />
                                                </Grid>
                                            </MDBox>
                                        </FormStep>
                                    </StepperForm>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}
