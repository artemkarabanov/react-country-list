import React from "react";
import { Country } from "../types/types";
import { Badge } from "./Badge";

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <img src={country.flag} width="80" className="img-thumbnail" alt="flag" />
      <p className="m-3 w-25">{country.name}</p>
      <p className="m-3 w-25">{country.capital}</p>
      <p className="m-3 w-25">{country.region}</p>
      <Badge color="bg-primary" value={country.area} label="area" />
      <Badge
        color="bg-secondary"
        value={country.population}
        label="population"
      />
    </li>
  );
};
