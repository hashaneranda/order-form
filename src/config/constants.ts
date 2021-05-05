interface FetchAdressProps {
  text: string;
  country: string;
  code: string | undefined;
}

export const FETCH_COUNTRIES = 'https://restcountries.eu/rest/v2/all';
export const fetchAddress = ({ text, country, code }: FetchAdressProps) =>
  `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&lang=en&limit=5&type=amenity&filter=countrycode:${country}&apiKey=${code}`;

export const CREATE_ORDER = 'https://reqres.in/api/users';
