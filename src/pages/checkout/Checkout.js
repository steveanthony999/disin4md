import { useState } from 'react';
import { Stepper, Step, StepLabel, Paper } from '@mui/material';

import AddressForm from '../../components/checkout/AddressForm';
import PaymentForm from '../../components/checkout/PaymentForm';

import './Checkout.css';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => <div>Confirmation</div>;

  return (
    <div className='Checkout'>
      <div className='Checkout-container'>
        <Paper elevation={3}>
          <h1>Checkout</h1>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </div>
    </div>
  );
};

export default Checkout;
