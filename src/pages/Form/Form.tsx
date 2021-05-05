import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';

// redux
import { RootState } from 'app/rootReducer';
import { fetchCountries, fetchCountriesReset, fetchAddresses, fetchAddressesReset } from 'features/geoData/geoDataSlice';

// types
import { Items, InitialData, FormItem } from './types';

// utils
import { mockEvent } from './utils/utils';
import { validationSchema, generateFormInputs, initialData } from './utils/formHelper';

// styles
import { Container, FormWrapper, TextFeild, Select, AutoComplete, FormSection } from './styles';

const mapDataToSelect = (array: Array<any>, key: string, value: string) => {
  return array ? array?.map((x: any) => ({ key: x[key], value: x[value] })) : [];
};

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.geoData.countries);
  const addresses = useSelector((state: RootState) => state.geoData.addresses);

  const countriesData = useMemo(() => mapDataToSelect(countries.data, 'alpha2Code', 'name'), [countries.data]);

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
                    </Grid>
                  );

                if (item.type === 'autoComplete')
                  return (
                    <Grid item sm={item?.size?.sm} md={item?.size?.md} lg={item?.size?.lg} key={item.name}>
                      <AutoComplete
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
      </FormWrapper>
    </Container>
  );
};

export default Form;
