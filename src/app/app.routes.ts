import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'user-details/:id', component: UserDetailsComponent},
    {path:'',component:HomeComponent}
];
