import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <div className='FormInput'>
      <Controller
        as={TextField}
        defaultValue=''
        control={control}
        name={name}
        label={label}
        required={required}
      />
    </div>
  );
};

export default FormInput;
