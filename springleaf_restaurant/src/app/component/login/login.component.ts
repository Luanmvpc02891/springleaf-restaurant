import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  login: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal) { }

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({ "login": this.login, "password": this.password });
  }

  onLogin(input: any): void {

  }

}
