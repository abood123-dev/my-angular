import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-home',
  imports: [UsersComponent,UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
