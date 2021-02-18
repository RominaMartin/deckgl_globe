import { getCountries } from "./requests";

export const initMainGlobe = async () => {
  const countries = await getCountries();
  const defaultSelected = [
    "ESP",
    "FRA",
    "VEN",
    "CAN",
    "ITA",
    "USA",
    "BEL",
    "NLD",
    "COL",
    "DEU",
  ];

  return { countries: countries, selected: defaultSelected };
};

export const handleSelection = ({ current, selected }) => {
  if (current.includes(selected))
    return current.filter((item) => item !== selected);

  return [...current, selected];
};
