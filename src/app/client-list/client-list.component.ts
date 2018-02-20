import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  existingAppID: any;
  lastname: any;
  firstname: any;
  exixtingClientData: any[];
  clientdatalist: boolean = false;
  recordsOverflow: boolean = false;

  constructor(private route: ActivatedRoute, private _clientservice: ClientService) { }

  ngOnInit() {

    // this.route.params.subscribe((data) => {
    //   if (data.id) {
    //      this.existingAppID = data.id || ''; // existingAppID is unique ID from mongodb.
    //   }
    //   debugger;     });
    if (this._clientservice.clientList) {
      if (this._clientservice.clientList.length <= 200) {
        this.exixtingClientData = (this._clientservice.clientList);
        this.clientdatalist = true;
      }
      else if (this._clientservice.clientList.length > 200) {
        this.recordsOverflow = true;
        this.exixtingClientData = (this._clientservice.clientList).slice(0, 199);
        this.clientdatalist = true;
      }
    }
    else {
      this.clientdatalist = false;
    }
  }
}

