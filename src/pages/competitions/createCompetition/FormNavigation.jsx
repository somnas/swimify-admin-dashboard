import React from 'react';

import { Button } from '@mui/material';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';

export default function FormNavigation({ stepNumber, isLastStep, onBackClick, onNextClick }) {
    return (
        <MDBox mt={3} width='100%' display='flex' justifyContent='space-between'>
            {stepNumber === 0 ? (
                <MDBox />
            ) : (
                <MDButton variant='gradient' color='light' onClick={onBackClick}>
                    back
                </MDButton>
            )}
            {!isLastStep ?
                <MDButton variant='gradient' color='dark' onClick={onNextClick}>
                    next
                </MDButton>
                :
                <MDButton variant='gradient' color='info' type='submit'>
                    send
                </MDButton>
            }
        </MDBox>
    );
}
