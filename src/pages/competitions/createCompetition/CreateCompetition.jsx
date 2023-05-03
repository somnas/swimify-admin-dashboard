import React, { useState } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import InputField from './InputField';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import * as yup from 'yup';
import StepperForm, { FormStep } from './StepperForm';
import SwitchInput from './SwitchInput';
import DatePickerInput from './DatePickerInput';
import DropZone from './DropZone';
import ButtonInputFieldUpload from './ButtonInputFieldUpload';

const validationSchema = yup.object({
    organizer_name: yup.string().required('Organizer name is required'),
    organizer_logo: yup.string().url(),
    contact_person_first_name: yup.string().required('First name is required'),
    contact_person_last_name: yup.string().required('Last name is required'),
    contact_person_email: yup.string().email().required('Email is required'),
    contact_person_phone: yup.string().required('Phone is required'),
});

export default function CreateCompetition() {

    const { user, signOut } = useAuthenticator((context) => [context.user]);
    //console.log(user);

    return (
        <>
            {/* <DashboardLayout> */}
            {/* <DashboardNavbar /> */}
            <MDBox mt={5} mb={9}>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} lg={9}>
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
                                        initialValues={
                                            initialValues
                                        }
                                        onSubmit={values => {
                                            console.log(values);
                                        }}
                                    >
                                        <FormStep
                                            stepName='Organizer'
                                            onSubmit={() => console.log('Step 1 submit')}
                                            validationSchema={validationSchema}
                                        >
                                            <Grid container item justifyContent='center' mt={3} spacing={3} sx={{ bgcolor: '' }}>
                                                <InputField name='organizer_name' label='Organizer Name' />
                                                <ButtonInputFieldUpload name='organizer_logo' label='Organizer Logo' buttonText='Choose file' />
                                                <InputField name='contact_person_first_name' label='Contact Person First Name' />
                                                <InputField name='contact_person_last_name' label='Contact Person Last Name' />
                                                <InputField name='contact_person_email' label='Contact Person Email' />
                                                <InputField name='contact_person_phone' label='Contact Person Phone' />
                                                <DropZone />
                                            </Grid>
                                        </FormStep>
                                        <FormStep
                                            stepName='Competition'
                                            onSubmit={() => console.log('Step 2 submit')}
                                            validationSchema={yup.object({
                                                //TODO: do better date validation on start and end date
                                                competition_name: yup.string().required('Competition name is required'),
                                                competition_image: yup.string().url(),
                                                nation: yup.string().required('Nation is required'),
                                                city: yup.string().required('City is required'),
                                                pool_name: yup.string().required('Pool name is required'),
                                                start_date: yup.date().required('Start date is required'),
                                                end_date: yup.date().required('End date is required'),
                                                superlive: yup.boolean(),
                                            })}
                                        >
                                            <Grid container item justifyContent='center' mt={3} spacing={3}>
                                                <InputField name='competition_name' label='Competition Name' />
                                                <InputField name='competition_image' label='Competition Image' />
                                                <InputField name='nation' label='Nation' />
                                                <InputField name='city' label='City' />
                                                <InputField name='pool_name' label='Pool Name' />
                                                <DatePickerInput name='start_date' label='Start Date' />
                                                <DatePickerInput name='end_date' label='End Date' />
                                                <SwitchInput name='superlive' label='Superlive' />
                                            </Grid>
                                        </FormStep>
                                    </StepperForm>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            {/* <Footer /> */}
            {/* </DashboardLayout> */}
        </>
    );
}


const initialValues = {
    organizer_name: '',
    organizer_logo: '',
    contact_person_first_name: '',
    contact_person_last_name: '',
    contact_person_email: '',
    contact_person_phone: '',
    competition_name: '',
    competition_image: '',
    nation: '',
    city: '',
    pool_name: '',
    start_date: new Date(),
    end_date: new Date(),
    superlive: false
};
