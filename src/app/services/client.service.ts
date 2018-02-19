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

  constructor(private http: Http) { }

  getClientList(): Observable<IClient[]> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const reqParams = new URLSearchParams();
    const options = new RequestOptions({ headers: header, params: reqParams });

    return this.http.get( '../app/data/clientList.json', options)
          .map((data: Response) => {
debugger;
            return data.json() as IClient[];
          });
  }
}
