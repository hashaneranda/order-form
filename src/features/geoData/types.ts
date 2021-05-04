export interface InitialState {
  countries: Payload;
  addresses: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
