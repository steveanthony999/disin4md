import { Link } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken, next }) => {
  const initialFormData = Object.freeze({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    unitNumber: '',
    city: '',
    zip: '',
  });

  const [formData, setFormData] = useState(initialFormData);

  //   const [field, setField] = useState({
  //     firstName: '',
  //     lastName: '',
  //     streetAddress: '',
  //     unitNumber: '',
  //     city: '',
  //     zip: '',
  //   });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    next({ ...formData, shippingCountry, shippingSubdivision, shippingOption });
  };

  return (
    <div className='AddressForm'>
      <h4>Shipping Address</h4>
      <form onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <input
          type='text'
          required
          //   value={field.firstName}
          //   onChange={(e) => setField({ ...field, firstName: e.target.value })}
          name='firstName'
          onChange={handleChange}
          placeholder='First name'
        />
        {/* LAST NAME */}
        <input
          type='text'
          required
          //   value={field.lastName}
          //   onChange={(e) => setField({ ...field, lastName: e.target.value })}
          name='lastName'
          onChange={handleChange}
          placeholder='Last Name'
        />
        {/* EMAIL */}
        <input
          type='text'
          required
          //   value={field.lastName}
          //   onChange={(e) => setField({ ...field, lastName: e.target.value })}
          name='email'
          onChange={handleChange}
          placeholder='email address'
        />
        {/* STREET ADDRESS */}
        <input
          type='text'
          required
          //   value={field.streetAddress}
          //   onChange={(e) =>
          //     setField({ ...field, streetAddress: e.target.value })
          //   }
          name='streetAddress'
          onChange={handleChange}
          placeholder='Street Address'
        />
        {/* UNIT/APT */}
        <input
          type='text'
          //   value={field.unitNumber}
          //   onChange={(e) => setField({ ...field, unitNumber: e.target.value })}
          name='unitNumber'
          onChange={handleChange}
          placeholder='Unit/Apt Number'
        />
        {/* CITY */}
        <input
          type='text'
          required
          //   value={field.city}
          //   onChange={(e) => setField({ ...field, city: e.target.value })}
          name='city'
          onChange={handleChange}
          placeholder='City'
        />
        {/* STATE */}
        <Select
          value={shippingSubdivision}
          onChange={(e) => setShippingSubdivision(e.target.value)}>
          {subdivisions.map((subdivision) => (
            <MenuItem key={subdivision.id} value={subdivision.id}>
              {subdivision.label}
            </MenuItem>
          ))}
        </Select>
        {/* ZIP */}
        <input
          type='text'
          required
          //   value={field.zip}
          //   onChange={(e) => setField({ ...field, zip: e.target.value })}
          name='zip'
          onChange={handleChange}
          placeholder='Zip Code'
        />
        {/* COUNTRY */}
        <Select
          value={shippingCountry}
          onChange={(e) => setShippingCountry(e.target.value)}>
          {countries.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
        <Link to='/cart'>Back to cart</Link>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default AddressForm;
