import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import FormNavigation from './FormNavigation';
import { Stepper, Step, StepLabel } from '@mui/material';

export default function StepperForm({ children, initialValues, onSubmit }) {

    const [stepNumber, setStepNumber] = useState(0);
    const [snapshot, setSnapshot] = useState(initialValues);

    const steps = React.Children.toArray(children);
    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const nextStep = (values) => {
        setSnapshot(values);
        setStepNumber(stepNumber + 1);
    };

    const previousStep = (values) => {
        setSnapshot(values);
        setStepNumber(stepNumber - 1);
    };

    const handleSubmit = async (values, actions) => {
        if (step.props.onSubmit) {
            console.log('awaiting form step onSubmit');
            await step.props.onSubmit(values, actions);
        }
        if (isLastStep) {
            console.log('submit last form step');
            return onSubmit(values, actions);
        } else {
            console.log('set touched to empty object and trigger next form step');
            actions.setTouched({});
            nextStep(values);
        }
    };

    return (
        <Formik
            initialValues={snapshot}
            onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>

                    <Stepper activeStep={stepNumber} alternativeLabel>
                        {steps.map(currentStep => {
                            const label = currentStep.props.stepName;

                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {step}

                    <FormNavigation
                        isLastStep={isLastStep}
                        stepNumber={stepNumber}
                        onBackClick={() => previousStep(formik.values)}
                    />
                </Form>
            )}
        </Formik>
    );
}

export const FormStep = ({ stepName = '', children }) => children;