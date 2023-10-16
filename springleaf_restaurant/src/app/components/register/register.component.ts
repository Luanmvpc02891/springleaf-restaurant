import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { UserHeaderComponent } from 'src/app/user/components/user-home/user-header/user-header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

}