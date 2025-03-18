import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}

