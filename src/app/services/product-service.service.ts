import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiDemo = 'https://621e368a849220b1fc93323b.mockapi.io/DATA'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }


  getAllData(): Observable<any> {
    return this.http.get<any>(`${apiDemo}`);
  }

  delItems(id: any): Observable<any> {
    return this.http.delete<any>(`${apiDemo}/${id}`);
  }


}
