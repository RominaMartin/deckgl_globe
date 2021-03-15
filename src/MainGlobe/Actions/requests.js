import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get(
    "https://gist.githubusercontent.com/RominaMartin/7ab40a307c57721eb036e2dfa12edcbf/raw/06d184f0d9634aed7aa218162867e8e8a2dffd24/countries.json"
  );

  return response.data;
};
