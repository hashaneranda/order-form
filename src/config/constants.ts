interface FetchAdressProps {
  text: string;
  country: string;
  code: string | undefined;
}

export const FETCH_COUNTRIES = 'https://restcountries.eu/rest/v2/all';
export const fetchAddress = ({ text, country, code }: FetchAdressProps) =>
  `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&filter=countrycode:${country}&apiKey=${code}`;
