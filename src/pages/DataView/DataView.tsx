import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

// redux
import { RootState } from 'app/rootReducer';

// styles
import { Container } from './styles';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const DataView: React.FC = () => {
  const userDetails = useSelector((state: RootState) => state.order.userDetails);
  const addressdetails = useSelector((state: RootState) => state.order.addressdetails);

  return (
    <Container>
      <h1>Order Summary</h1>
      <Grid container>
        <h3>User details</h3>
        {userDetails.data &&
          Object.keys(userDetails.data).map((name: any, index: number) => (
            <Grid container key={index}>
              <Grid item lg={6}>
                <p className='item_heading'>{capitalizeFirstLetter(name.replace(/_/g, ' '))} : </p>
              </Grid>
              <Grid item lg={6}>
                <p className='item_data'>{userDetails.data[name]}</p>
              </Grid>
            </Grid>
          ))}
      </Grid>
      <Grid container>
        <h3>User Address details</h3>
        {addressdetails.data &&
          Object.keys(addressdetails.data).map((name: any, index: number) => (
            <Grid container key={index}>
              <Grid item lg={6}>
                <p className='item_heading'>{capitalizeFirstLetter(name.replace(/_/g, ' '))} : </p>
              </Grid>
              <Grid item lg={6}>
                <p className='item_data'>{addressdetails.data[name]}</p>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default DataView;
