import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nav',    
  imports:[CommonModule,FormsModule],
  templateUrl: './nav.component.html',  
  styleUrls: ['./nav.component.css']    
})
export class NavComponent {
  searchQuery: number = 0;  
  searchResults: any[] = [];  

  constructor(private userService: UserserviceService, private router: Router) {}

  
  onSearchChange(): void {
    if (this.searchQuery) {
      this.fetchSearchResults(this.searchQuery);
    } else {
      this.searchResults = []; 
    }
  }

 
  fetchSearchResults(id: number): void {
    this.userService.getUserbyid(id).subscribe(
      (response) => {
        if (response) {
          this.searchResults = [response];  
        } else {
          this.searchResults = [];  
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
        this.searchResults = []; 
      }
    );
  }

  goToUserDetails(id: number): void {
    this.router.navigate([`/user-details/${id}`]);
  }



}

