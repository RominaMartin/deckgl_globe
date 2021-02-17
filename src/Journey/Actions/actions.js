import { getCountries } from "./requests";

export const initJourney = async () => {
  const countries = await getCountries();
  const selected = ["ESP", "FRA", "PRT"];

  return { countries: countries, selected: selected };
};
