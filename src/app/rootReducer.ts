// reducers
import geoData from 'features/geoData/geoDataSlice';
import order from 'features/order/orderSlice';

const rootReducer = {
  geoData,
  order,
};

export type RootState = ReturnType<any>;

export default rootReducer;
