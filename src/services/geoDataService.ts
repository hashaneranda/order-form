import axios from 'axios';

// endpoints
import * as constants from 'config/constants';

export const fetchCountries = async () => {
  let apiRes = null;

  try {
    apiRes = await axios.get(constants.FETCH_COUNTRIES);
  } catch (err) {
    apiRes = err.response;
  }

  return apiRes;
};

export const fetchAddress = async (request: any) => {
  let apiRes = null;

  const API_ENDPOINT = constants.fetchAddress({
    text: request.payload?.text,
    country: request.payload?.country,
    code: process.env.REACT_APP_GEOAPIFY_KEY,
  });

  try {
    apiRes = await axios.get(API_ENDPOINT);
  } catch (err) {
    apiRes = err.response;
  }

  return apiRes;
};
