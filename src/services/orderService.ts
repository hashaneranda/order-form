import axios from 'axios';

// endpoints
import * as constants from 'config/constants';

export const createUserDetails = async (payload: any) => {
  let apiRes = null;

  try {
    apiRes = await axios.post(constants.CREATE_ORDER, payload);
  } catch (err) {
    apiRes = err.response;
  }

  return apiRes;
};

export const createAddressDetails = async (payload: any) => {
  let apiRes = null;

  try {
    apiRes = await axios.post(constants.CREATE_ORDER, payload);
  } catch (err) {
    apiRes = err.response;
  }

  return apiRes;
};
