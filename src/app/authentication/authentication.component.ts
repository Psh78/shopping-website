import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DummyData } from '../dummyData/dummyData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private _dummyData : DummyData, private _router : Router) { }

  email !: string;
  password !: string;

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    this._dummyData.currentCredentials.email = form.value.email;
    this._dummyData.currentCredentials.password = form.value.password;
    if(JSON.stringify(this._dummyData.currentCredentials) === JSON.stringify(this._dummyData.workingCredentials))
      form.resetForm();
    this._router.navigate(['home']);
  }
}
