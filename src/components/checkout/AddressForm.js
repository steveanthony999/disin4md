import { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken }) => {
  const [field, setField] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    unitNumber: '',
    city: '',
    state: '',
    zip: '',
  });

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    console.log(countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <div className='AddressForm'>
      <h4>Shipping Address</h4>
      <form>
        {/* FIRST NAME */}
        <input
          type='text'
          required
          value={field.firstName}
          onChange={(e) => setField({ ...field, firstName: e.target.value })}
          placeholder='First name'
        />
        {/* LAST NAME */}
        <input
          type='text'
          required
          value={field.lastName}
          onChange={(e) => setField({ ...field, lastName: e.target.value })}
          placeholder='Last Name'
        />
        {/* STREET ADDRESS */}
        <input
          type='text'
          required
          value={field.streetAddress}
          onChange={(e) =>
            setField({ ...field, streetAddress: e.target.value })
          }
          placeholder='Street Address'
        />
        {/* UNIT/APT */}
        <input
          type='text'
          value={field.unitNumber}
          onChange={(e) => setField({ ...field, unitNumber: e.target.value })}
          placeholder='Unit/Apt Number'
        />
        {/* CITY */}
        <input
          type='text'
          required
          value={field.city}
          onChange={(e) => setField({ ...field, city: e.target.value })}
          placeholder='City'
        />
        {/* STATE */}
        <input
          type='text'
          required
          value={field.state}
          onChange={(e) => setField({ ...field, state: e.target.value })}
          placeholder='State'
        />
        {/* ZIP */}
        <input
          type='text'
          required
          value={field.zip}
          onChange={(e) => setField({ ...field, zip: e.target.value })}
          placeholder='Zip Code'
        />
      </form>
    </div>
  );
};

export default AddressForm;
