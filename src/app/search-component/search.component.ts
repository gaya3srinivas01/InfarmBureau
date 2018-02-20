import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IClient } from '../Models/common';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm: FormGroup;
  valid: boolean = true;
  clientData: any[];

  constructor(private router: Router, private fb: FormBuilder, private _clientservice : ClientService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      // appName: [''],
      // appId: [""],
      fName: [''],
      lName: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      policyNumber: [''],
      membershipNumber: [''],
      phNumber: [''],
      email: [''],
      dob: [''],
      socialSecurity: ['']
      //  title: ['', [<any>Validators.required]],
    });
  }

  searchData(client: IClient, isValid: boolean, btnName: string) {
    if (!(
    (client.address)  ||
    (client.city )  ||
    (client.dob )  ||
    (client.email )  ||
    (client.lName )  ||
    (client.membershipNumber )  ||
    (client.phNumber )  ||
    (client.policyNumber )  ||
    (client.socialSecurity )  ||
    (client.state )  ||
    (client.zip )  )) {
      this.valid = false;
      
    }
    else 
    {
      this.valid = true;
      this._clientservice.getClientList()
    .subscribe(data => {
      this.clientData = data;
      this.router.navigateByUrl('clientList');
    });
    }    
  }
}