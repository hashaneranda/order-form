export interface InitialState {
  countries: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
