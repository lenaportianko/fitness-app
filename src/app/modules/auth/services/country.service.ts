import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../models/country-response.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getCountries(): Observable<CountryResponse> {
    return this.httpClient.get<CountryResponse>("https://countriesnow.space/api/v0.1/countries/iso");
  }
}