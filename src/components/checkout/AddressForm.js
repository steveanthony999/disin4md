import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';

const AddressForm = () => {
  const methods = useForm();

  return (
    <div className='AddressForm'>
      <h4>Shipping Address</h4>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <div>
            <FormInput required name='firstName' label='First Name' />
            <FormInput required name='lastName' label='Last Name' />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
