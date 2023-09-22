import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onLogin(input: any): void {
    const loginData = {
      login: this.login,
      password: this.password
    };

    this.apiService.request<any>(
      "post",
      "login",
      loginData
    ).subscribe(
      (response) => {
        console.log("Login successful", response);
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }

  onRegister(input: any): void {
    const loginData = {
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      password: this.password
    };

    this.apiService.request<any>(
      "post",
      "register",
      loginData
    ).subscribe(
      (response) => {
        console.log("Login successful", response);
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }

}
