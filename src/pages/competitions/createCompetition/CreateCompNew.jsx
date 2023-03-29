import React, { useState } from 'react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';
import InputField from './InputField';

// @mui material components
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import FormField from './components/FormField';

import { Formik } from 'formik';
import * as yup from 'yup';
import StepperForm, { FormStep } from './StepperForm';

function getSteps() {
    return ['1. Product Info', '2. Media', '3. Social', '4. Pricing'];
}

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required')
});

export default function CreateCompNew() {

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => setActiveStep(activeStep + 1);
    const handleBack = () => setActiveStep(activeStep - 1);

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
                            <MDBox mt={-3} mb={3} mx={2}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </MDBox>
                            <MDBox p={2}>
                                <MDBox>
                                    <StepperForm
                                        initialValues={{
                                            name: '',
                                            email: '',
                                        }}
                                        onSubmit={values => {
                                            console.log(values);
                                        }}
                                    >
                                        <FormStep
                                            stepName='Person'
                                            onSubmit={() => console.log('Step 1 submit')}
                                            validationSchema={validationSchema}
                                        >
                                            <MDBox mt={3}>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6}>
                                                        <InputField name='name' label='Name' />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <InputField name='email' label='Email' />
                                                    </Grid>
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
