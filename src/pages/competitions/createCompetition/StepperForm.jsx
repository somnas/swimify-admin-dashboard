import React, { useState } from 'react';
import { Formik, FormikConfig, FormikValues } from 'formik';

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

    const handleSubmit = async (values) => {
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
            initialValues={{}}
            onSubmit={onSubmit}
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>

                </form>
            )}
        </Formik>
    );
}

export const FormStep = ({ stepName = '', children }) => children;