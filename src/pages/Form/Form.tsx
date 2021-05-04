import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// redux
import { RootState } from 'app/rootReducer';
import { fetchCountries } from 'features/geoData/geoDataSlice';

// types
import { SelectProps, Items, InitialData } from './types';

// styles
import { Container, FormWrapper, TextFeild, Select } from './styles';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().email().required('Email is Required'),
  phone: Yup.string().matches(phoneRegex, 'Invalid Telephone Number').required('Telephone Number is required'),
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

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.geoData.countries);

  const formInputs = useMemo(
    () => (countries.data ? generateFormInputs(countries.data.map((x: any) => ({ key: x.name, value: x.name }))) : []),
    [countries.data],
  );

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (v: InitialData) => {},
  });

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

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
          })}
      </FormWrapper>
    </Container>
  );
};

export default Form;
