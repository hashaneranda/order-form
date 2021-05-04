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
);
