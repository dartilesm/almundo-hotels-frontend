import { IFilters } from './../models/filters';
import { IHotel } from './../models/hotel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  get(filters: IFilters = {}): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(`${environment.webServiceUrl}`, {params: filters as any});
  }
  getById(id: string): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(`${environment.webServiceUrl}/${id}`);
  }
  create(hotel: IHotel): Observable<IHotel[]> {
    return this.http.post<IHotel[]>(`${environment.webServiceUrl}`, hotel);
  }
  edit(id: string, hotel: IHotel): Observable<IHotel[]> {
    return this.http.put<IHotel[]>(`${environment.webServiceUrl}/${id}`, hotel);
  }
  delete(id: string): Observable<IHotel[]> {
    return this.http.delete<IHotel[]>(`${environment.webServiceUrl}/${id}`);
  }
}
