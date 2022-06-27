import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encurtador } from '../models/encurtador';
import { EncurtadorDto } from '../models/encurtador-dto';

@Injectable({
  providedIn: 'root'
})
export class EncurtadorService {

  constructor(private http: HttpClient) { }

  save(dto: EncurtadorDto):Observable<Encurtador>{
    return this.http.post<Encurtador>(`${environment.api}`, dto);
  }

  findByEncodedURL(dto: EncurtadorDto):Observable<Encurtador>{
    return this.http.post<Encurtador>(`${environment.api}/filter`, dto);
  }

}
