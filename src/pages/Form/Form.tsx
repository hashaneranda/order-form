import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';

// components
import { PrimaryButton } from 'common/components/Button/Button';

// redux
import { RootState } from 'app/rootReducer';
import { fetchCountries, fetchCountriesReset, fetchAddresses, fetchAddressesReset } from 'features/geoData/geoDataSlice';
import { createUserDetails, createUserDetailsReset, createAddressDetails, createAddressDetailsReset } from 'features/order/orderSlice';

// types
import { Items, InitialData, FormItem } from './types';

// utils
import { mockEvent, mapDataToSelect, generateIsChecked } from './utils/utils';
import { validationSchema, generateFormInputs, initialData, checkBoxData } from './utils/formUtils';

// styles
import { Container, FormWrapper, TextFeild, Select, AutoComplete, FormSection, CheckBox, FooterContainer } from './styles';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.geoData.countries);
  const addresses = useSelector((state: RootState) => state.geoData.addresses);
  const userDetails = useSelector((state: RootState) => state.order.userDetails);
  const addressdetails = useSelector((state: RootState) => state.order.addressdetails);

  const countriesData = useMemo(() => mapDataToSelect(countries.data, 'alpha2Code', 'name'), [countries.data]);

  const formInputs = useMemo(() => generateFormInputs(countriesData), [countriesData]);

  const [orderData, setOrderData] = useState<null | InitialData>(null);

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (v: InitialData) => {
      console.log('submitetd--', v);

      setOrderData(v);

      dispatch(
        createUserDetails({
          firstName: v.firstName,
          lastName: v.lastName,
          email: v.email,
          phone: v.phone,
        }),
      );
    },
  });

  useEffect(() => {
    dispatch(fetchCountries());

    return () => {
      dispatch(fetchCountriesReset());
      dispatch(createUserDetailsReset());
      dispatch(createAddressDetailsReset());
    };
  }, []);

  useEffect(() => {
    if (userDetails.data && !!orderData) {
      dispatch(
        createAddressDetails({
          country: orderData.country,
          address01: orderData.address01,
          address02: orderData.address02,
          city: orderData.city,
          province: orderData.province,
          postalCode: orderData.postalCode,
          books: orderData.books,
          cars: orderData.cars,
          laptops: orderData.laptops,
          watches: orderData.watches,
        }),
      );
    }
  }, [userDetails.data]);

  /*
   *handle address autoComplete selection
   *
   * @param event React.Event
   * @param newValue selected value form address autocomplete
   */
  const handleAddressSelection = (event: any, newValue: any) => {
    formik.handleChange(mockEvent('address01', newValue?.properties?.address_line1 || ''));
    formik.handleChange(mockEvent('address02', newValue?.properties?.address_line2 || ''));
    formik.handleChange(mockEvent('city', newValue?.properties?.city || ''));
    formik.handleChange(mockEvent('postalCode', newValue?.properties?.postcode || ''));
  };

  /*
   *handle checkbox checking action
   *
   * @param event React.Event
   */
  const handleCheckBoxSelection = (event: React.ChangeEvent<any>) => {
    formik.handleChange(mockEvent(event.target.name, event.target.checked));
  };

  return (
    <Container>
      <h1>Order Details</h1>
      <FormWrapper onSubmit={formik.handleSubmit}>
        {!!formInputs &&
          formInputs.map((formSection: Items, index: number) => (
            <FormSection spacing={3} container key={index}>
              <Grid item xs={12}>
                <h5>{formSection.title}</h5>
              </Grid>

              {formSection.data.map((item: FormItem) => {
                if (item.type === 'select')
                  return (
                    <Grid item sm={item?.size?.sm} md={item?.size?.md} lg={item?.size?.lg} key={item.name}>
                      <Select
                        labelValue={item.label}
                        data={item.data || []}
                        id={item.name}
                        name={item.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[item.name]}
                        inputError={formik.errors[item.name]}
                      />
                    </Grid>
                  );

                if (item.type === 'autoComplete')
                  return (
                    <Grid item sm={item?.size?.sm} md={item?.size?.md} lg={item?.size?.lg} key={item.name}>
                      <AutoComplete
                        placeholder={item.placeholder}
                        data={addresses.data?.features || []}
                        fetchData={x =>
                          dispatch(
                            fetchAddresses({
                              text: x,
                              country: typeof formik.values['country'] === 'string' ? formik.values['country']?.toLowerCase() : '',
                            }),
                          )
                        }
                        onChange={handleAddressSelection}
                        value=''
                        clearData={() => dispatch(fetchAddressesReset())}
                        renderOption={(x: any) => x?.properties?.formatted}
                        disabled={!formik.values['country']}
                        getOptionLabel={(option: any) => (typeof option === 'string' ? option : option?.properties?.formatted)}
                      />
                    </Grid>
                  );

                return (
                  <Grid item sm={item?.size?.sm} md={item?.size?.md} lg={item?.size?.lg} key={item.name}>
                    <TextFeild
                      label={item.label}
                      id={item.name}
                      name={item.name}
                      type={item.type}
                      onChange={formik.handleChange}
                      value={formik.values[item.name]}
                      onBlur={formik.handleBlur}
                      inputError={formik.errors[item.name]}
                    />
                  </Grid>
                );
              })}
            </FormSection>
          ))}

        <CheckBox
          labelValue="I'd like to hear more about"
          onChange={handleCheckBoxSelection}
          data={checkBoxData}
          values={generateIsChecked(checkBoxData, formik.values)}
        />
        <FooterContainer>
          <PrimaryButton type='submit' loading={userDetails.loading || addressdetails.loading}>
            SAVE
          </PrimaryButton>
        </FooterContainer>
      </FormWrapper>
    </Container>
  );
};

export default Form;
