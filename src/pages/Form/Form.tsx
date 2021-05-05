import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// redux
import { RootState } from 'app/rootReducer';
import { fetchCountries, fetchCountriesReset, fetchAddresses, fetchAddressesReset } from 'features/geoData/geoDataSlice';

// types
import { SelectProps, Items, InitialData } from './types';

// styles
import { Container, FormWrapper, TextFeild, Select, AutoComplete } from './styles';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const mockEvent = (name: string, value: any) => {
  return {
    persist: () => null,
    target: {
      type: 'change',
      name: name,
      value: value,
    },
  };
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().email().required('Email is Required'),
  phone: Yup.string().matches(phoneRegex, 'Invalid Telephone Number').required('Telephone Number is required'),
  address01: Yup.string().required('Address Line 1 is Required'),
  address02: Yup.string().required('Address Line 2 is Required'),
  city: Yup.string().required('City is Required'),
  postalCode: Yup.string().required('Postal Code is Required'),
});

const generateFormInputs = (countries: Array<SelectProps>): Array<Items> => {
  return [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      label: 'Telephone Number',
      type: 'text',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      data: countries,
    },
    {
      name: 'address',
      label: 'Address',
      placeholder: 'Type part of an address or postal code EG: "AM5 6QH" or "B4 Sir Matt Busy Way"',
      type: 'autoComplete',
    },
    {
      name: 'address01',
      label: 'Address Line 1',
      type: 'text',
    },
    {
      name: 'address02',
      label: 'Address Line 2',
      type: 'text',
    },
    {
      name: 'city',
      label: 'Town/City',
      type: 'text',
    },
    {
      name: 'province',
      label: 'Country/Province/State',
      type: 'text',
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      type: 'text',
    },
  ];
};

const initialData: InitialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  address: '',
  address01: '',
  address02: '',
  city: '',
  province: '',
  postalCode: '',
};

const mapDataToSelect = (array: Array<any>, key: string, value: string) => {
  return array ? array?.map((x: any) => ({ key: x[key], value: x[value] })) : [];
};

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.geoData.countries);
  const addresses = useSelector((state: RootState) => state.geoData.addresses);

  const countriesData = useMemo(() => mapDataToSelect(countries.data, 'alpha2Code', 'name'), [countries.data]);
  // const addressesData = useMemo(() => mapDataToSelect(addresses.data, 'name', 'name'), [countries.data]);

  const formInputs = useMemo(() => generateFormInputs(countriesData), [countriesData]);

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (v: InitialData) => {},
  });

  useEffect(() => {
    dispatch(fetchCountries());

    return () => {
      dispatch(fetchCountriesReset());
    };
  }, []);

  const handleAddressSelection = (event: any, newValue: any) => {
    console.log('new value---', newValue);

    formik.handleChange(mockEvent('address', newValue?.properties?.formatted || ''));
    formik.handleChange(mockEvent('address01', newValue?.properties?.address_line1 || ''));
    formik.handleChange(mockEvent('address02', newValue?.properties?.address_line2 || ''));
    formik.handleChange(mockEvent('city', newValue?.properties?.city || ''));
    formik.handleChange(mockEvent('postalCode', newValue?.properties?.postcode || ''));
  };

  return (
    <Container>
      <h1>Order Details</h1>
      <FormWrapper>
        {!!formInputs &&
          formInputs.map((item: Items) => {
            if (item.type === 'text')
              return (
                <TextFeild
                  label={item.label}
                  id={item.name}
                  key={item.name}
                  name={item.name}
                  type={item.type}
                  onChange={formik.handleChange}
                  value={formik.values[item.name]}
                  onBlur={formik.handleBlur}
                  inputError={formik.errors[item.name]}
                />
              );

            if (item.type === 'select')
              return (
                <Select
                  key={item.name}
                  labelValue={item.label}
                  data={item.data || []}
                  id={item.name}
                  name={item.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                  inputError={formik.errors[item.name]}
                />
              );

            if (item.type === 'autoComplete')
              return (
                <AutoComplete
                  key={item.name}
                  placeholder={item.placeholder}
                  data={addresses.data?.features || []}
                  fetchData={x => dispatch(fetchAddresses({ text: x, country: formik.values['country']?.toLowerCase() }))}
                  onChange={handleAddressSelection}
                  value={formik.values[item.name]}
                  inputError={formik.errors[item.name]}
                  clearData={() => dispatch(fetchAddressesReset())}
                  renderOption={(x: any) => x?.properties?.formatted}
                  disabled={!formik.values['country']}
                  getOptionLabel={(option: any) => (typeof option === 'string' ? option : option?.properties?.formatted)}
                />
              );
          })}
      </FormWrapper>
    </Container>
  );
};

export default Form;
