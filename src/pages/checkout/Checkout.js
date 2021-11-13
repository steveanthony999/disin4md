import { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Paper } from '@mui/material';

import AddressForm from '../../components/checkout/AddressForm';
import PaymentForm from '../../components/checkout/PaymentForm';

import './Checkout.css';
import { commerce } from '../../lib/commerce';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </div>
    </div>
  );
};

export default Checkout;
