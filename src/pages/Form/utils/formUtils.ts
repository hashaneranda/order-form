import * as Yup from 'yup';

// types
import { SelectProps, Items, InitialData, CheckItem } from '../types';

// utils
import { phoneRegex } from './utils';

export const initialData: InitialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  address01: '',
  address02: '',
  city: '',
  province: '',
  postalCode: '',
  cars: false,
  books: false,
  watches: false,
  laptops: false,
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().email().required('Email is Required'),
  phone: Yup.string().matches(phoneRegex, 'Invalid Telephone Number').required('Telephone Number is required'),
  address01: Yup.string().required('Address Line 1 is Required'),
  address02: Yup.string().required('Address Line 2 is Required'),
  city: Yup.string().required('City is Required'),
  postalCode: Yup.string().required('Postal Code is Required'),
  cars: Yup.boolean(),
  books: Yup.boolean(),
  watches: Yup.boolean(),
  laptops: Yup.boolean(),
});

export const generateFormInputs = (countries: Array<SelectProps>): Array<Items> => {
  return [
    {
      title: 'YOUR DETAILS',
      data: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'lastName',
          label: 'Last name',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'phone',
          label: 'Telephone Number',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
      ],
    },
    {
      title: 'YOUR ADDRESS',
      data: [
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          data: countries,
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'address',
          label: 'Address',
          placeholder: 'Type part of an address or postal code EG: "AM5 6QH" or "B4 Sir Matt Busy Way"',
          type: 'autoComplete',
          size: {
            lg: 12,
            md: 12,
            sm: 12,
          },
        },
        {
          name: 'address01',
          label: 'Address Line 1',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'address02',
          label: 'Address Line 2',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'city',
          label: 'Town/City',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'province',
          label: 'Country/Province/State',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
        {
          name: 'postalCode',
          label: 'Postal Code',
          type: 'text',
          size: {
            lg: 6,
            md: 6,
            sm: 6,
          },
        },
      ],
    },
  ];
};

export const checkBoxData: Array<CheckItem> = [
  {
    name: 'cars',
    title: 'Cars',
  },
  {
    name: 'books',
    title: 'Books',
  },
  {
    name: 'watches',
    title: 'Watches',
  },
  {
    name: 'laptops',
    title: 'Laptops',
  },
];
