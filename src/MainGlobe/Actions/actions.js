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
    "GBR",
    "DNK",
  ];

  return { countries: countries, selected: defaultSelected };
};

export const handleSelection = ({ current, selected }) => {
  if (current.includes(selected))
    return current.filter((item) => item !== selected);

  return [...current, selected];
};

export const getAreaFromSelected = ({ data, selected }) =>
  Math.floor(
    data.reduce(
      (accumulator, current) =>
        (selected.includes(current.iso) ? current.area : 0) + accumulator,
      0
    )
  );
