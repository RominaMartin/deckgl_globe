import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get(
    "https://gist.githubusercontent.com/RominaMartin/7ab40a307c57721eb036e2dfa12edcbf/raw/3945bdbefe6293997cf69e604d42f9ff641f10c5/countries.json"
  );

  return response.data;
};
