import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public value3: any;
  public checked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
