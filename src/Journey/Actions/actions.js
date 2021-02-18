import { getCountries } from "./requests";

export const initJourney = async () => {
  const countries = await getCountries();
  const selected = ["ESP", "FRA", "PRT"];

  return { countries: countries, selected: selected };
};

export const handleSelection = ({ current, selected }) => {
  if (current.includes(selected))
    return current.filter((item) => item !== selected);

  return [...current, selected];
};
