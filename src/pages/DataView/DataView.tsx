import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

// components
import { PrimaryButton } from 'common/components/Button/Button';

// redux
import { RootState } from 'app/rootReducer';
import { fetchCountriesReset, fetchAddressesReset } from 'features/geoData/geoDataSlice';
import { createUserDetailsReset, createAddressDetailsReset } from 'features/order/orderSlice';

// styles
import { Container, DataContainer } from './styles';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const DataView: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userDetails = useSelector((state: RootState) => state.order.userDetails);
  const addressdetails = useSelector((state: RootState) => state.order.addressdetails);

  useEffect(() => {
    if (!addressdetails.data && !userDetails.data) history.push('/');
  }, [userDetails, addressdetails]);

  const handleOrderReset = () => {
    dispatch(fetchCountriesReset());
    dispatch(fetchAddressesReset());
    dispatch(createUserDetailsReset());
    dispatch(createAddressDetailsReset());
  };

  return (
    <Container>
      <h1>Order Summary</h1>
      <DataContainer container spacing={3}>
        <Grid item lg={12}>
          <h3>User details</h3>
        </Grid>
        {userDetails.data &&
          Object.keys(userDetails.data).map((name: any, index: number) => (
            <Grid container spacing={2} key={index}>
              <Grid item lg={6}>
                <p className='item_heading'>{capitalizeFirstLetter(name.replace(/_/g, ' '))} : </p>
              </Grid>
              <Grid item lg={6}>
                <p className='item_data'>{userDetails.data[name]}</p>
              </Grid>
            </Grid>
          ))}
      </DataContainer>
      <DataContainer container spacing={3}>
        <Grid item lg={12}>
          <h3>User Address details</h3>
        </Grid>
        {addressdetails.data &&
          Object.keys(addressdetails.data).map((name: any, index: number) => (
            <Grid container spacing={2} key={index}>
              <Grid item lg={6}>
                <p className='item_heading'>{capitalizeFirstLetter(name.replace(/_/g, ' '))} : </p>
              </Grid>
              <Grid item lg={6}>
                <p className='item_data'>{String(addressdetails.data[name])}</p>
              </Grid>
            </Grid>
          ))}
      </DataContainer>

      <PrimaryButton onClick={() => handleOrderReset()}>Reset</PrimaryButton>
    </Container>
  );
};

export default DataView;
