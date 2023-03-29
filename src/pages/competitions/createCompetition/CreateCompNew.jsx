import React, { useState } from 'react';

import DashboardLayout from 'layouts/containers/DashboardLayout';
import DashboardNavbar from 'layouts/components/navbars/dashboardNavbar/DashboardNavbar';
import Footer from 'layouts/components/Footer';

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

function getSteps() {
    return ['1. Product Info', '2. Media', '3. Social', '4. Pricing'];
}

const validationSchema = yup.object({
    name: yup.string().required('Name is required')
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
                                    <Formik initialValues={{
                                        name: '',
                                    }}
                                        onSubmit={values => {
                                            console.log(values);
                                        }}
                                    >
                                        {(formik) => (
                                            <form onSubmit={formik.handleSubmit}>
                                                <MDBox mt={3}>
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={6}>
                                                            <FormField
                                                                id='name'
                                                                name='name'
                                                                label='Name'
                                                                value={formik.values.name}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                                helperText={formik.touched.name && formik.errors.name}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <FormField type="text" label="Weight" />
                                                        </Grid>
                                                    </Grid>
                                                </MDBox>
                                                <MDBox mt={3} width='100%' display='flex' justifyContent='space-between'>
                                                    {activeStep === 0 ? (
                                                        <MDBox />
                                                    ) : (
                                                        <MDButton variant='gradient' color='light' onClick={handleBack}>
                                                            back
                                                        </MDButton>
                                                    )}
                                                    {!isLastStep ?
                                                        <MDButton variant='gradient' color='dark' onClick={handleNext}>
                                                            next
                                                        </MDButton>
                                                        :
                                                        <MDButton variant='gradient' color='info' type='submit'>
                                                            send
                                                        </MDButton>
                                                    }
                                                </MDBox>
                                            </form>
                                        )}
                                    </Formik>
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
