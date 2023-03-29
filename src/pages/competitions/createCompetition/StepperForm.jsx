import React, { useState } from 'react';
import { Formik, Form, FormikConfig, FormikValues } from 'formik';
import FormNavigation from './FormNavigation';

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
            await step.props.onSubmit(values);
        }
        if (isLastStep) {
            return onSubmit(values, actions);
        } else {
            actions.setTouched({});
            nextStep(values);
        }
    };

    return (
        <Formik
            initialValues={{snapshot}}
            onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <Form>
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