import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { IClient } from '../Models/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class ClientService {

  public clientList: IClient[];
  constructor(private http: Http) { }

  getClientList(): Observable<IClient[]> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const reqParams = new URLSearchParams();
    const options = new RequestOptions({ headers: header, params: reqParams });

    return this.getclientData(options);
  }

  private getclientData(options: RequestOptions): Observable<IClient[]> {
    return this.http.get('assets/data/clientList.json', options)
      .map((data: Response) => {
        debugger;
        this.clientList = data.json();
        return data.json() as IClient[];
      })
      .catch((error: Response) => Observable.throw(error.json()));
      
  }
}
