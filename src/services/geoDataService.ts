import axios from 'axios';

// endpoints
import { FETCH_COUNTRIES } from 'config/constants';

export const fetchCountries = async () => {
  let apiRes = null;

  try {
    apiRes = await axios.get(FETCH_COUNTRIES);
  } catch (err) {
    apiRes = err.response;
  }

  return apiRes;
};
