import { CountryData } from "./country-data.model";

export type CountryResponse = {
    error: boolean;
    msg: string;
    data: CountryData[];
};