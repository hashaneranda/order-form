//services
import * as services from 'services/geoDataService';

//actions
import * as actions from './geoDataSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const fetchCountries = returnSaga(
  services.fetchCountries,
  actions.fetchCountries,
  actions.fetchCountriesSuccess,
  actions.fetchCountriesError,
  200,
);

export const fetchAddresses = returnSaga(
  services.fetchAddress,
  actions.fetchAddresses,
  actions.fetchAddressesSuccess,
  actions.fetchAddressesError,
  200,
);
