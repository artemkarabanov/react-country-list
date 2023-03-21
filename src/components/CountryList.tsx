import React from "react";
import { Country } from "../types/types";
import { CountryItem } from "../components/CountryItem";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group pt-3">
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
};
