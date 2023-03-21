import { Country, CountryApi } from "../types/types";

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map((country: CountryApi) => {
    return {
      name: country.name.common,
      capital: country.capital.join(),
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  });
};
