import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: any = null;
  idd?:number;
  constructor(private route: ActivatedRoute, private userService: UserserviceService,private router:Router) {}
   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.idd = +id;
        console.log('User ID from route:', this.idd);
        this.fetchUserDetails(this.idd);
      } else {
        console.error('No user ID found in route.');
      }
    });
  }

  fetchUserDetails(id: number): void {
    this.userService.getUserbyid(id).subscribe({
      next: user => {
        this.user = user;
        console.log('User Details:', this.user);
      },
      error: error => {
        console.error('Error fetching user:', error);
      },
      complete: () => {
        console.log('User fetching completed.');
      }
    });
   
  }
  goHome(): void {
    this.router.navigate(['/']);  
  } 
    }


