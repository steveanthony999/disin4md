import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className='Checkout'>
      <h1>Checkout</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Checkout;
