//services
import * as services from 'services/orderService';

//actions
import * as actions from './orderSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const createUserDetails = returnSaga(
  services.createUserDetails,
  actions.createUserDetails,
  actions.createUserDetailsSuccess,
  actions.createUserDetailsError,
  201,
);

export const createAddressDetails = returnSaga(
  services.createAddressDetails,
  actions.createAddressDetails,
  actions.createAddressDetailsSuccess,
  actions.createAddressDetailsError,
  201,
);
