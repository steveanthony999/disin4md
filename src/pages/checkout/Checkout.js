import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

import AddressForm from '../../components/checkout/AddressForm';
import PaymentForm from '../../components/checkout/PaymentForm';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => <div>Confirmation</div>;

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
      {activeStep === steps.length ? <Confirmation /> : <Form />}
    </div>
  );
};

export default Checkout;
