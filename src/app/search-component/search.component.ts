import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IClient } from '../Models/common';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private _clientservice : ClientService) { }

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
      phNumber: [""],
      email: [''],
      dob: [""],
      socialSecurity: [''],
      //  title: ['', [<any>Validators.required]],
      vp: [''],
    });
  }

  searchData(client: IClient, isValid: boolean, btnName: string) {
    this._clientservice.getClientList()
    .subscribe(data => {
      console.log("Hello" + data);
    });

  }
}


