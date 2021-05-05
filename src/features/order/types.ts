export interface InitialState {
  userDetails: Payload;
  addressdetails: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
