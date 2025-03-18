import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { response } from 'express';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports:[CommonModule],
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: Object | any;
  paginatedUsers: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  usersPerPage: number = 3; 
  constructor (private data:DataService,private router:Router){}
  ngOnInit(): void {
  
   this.fetchUsers()
  }
  fetchUsers()
  {   this.loading=true
      this.data.getUsers().subscribe((response:any)=>{
        if (response && Array.isArray(response.data)) {  
          this.users = response.data; 
          console.log("Users Array:", this.users);
        }
      this.loading=false
      this.updatePaginatedUsers();
       console.log(this.users);
  })
  }
  goToUserDetails(userId: number) {
    this.router.navigate(['/user-details',userId])
     
  }
  updatePaginatedUsers() {
    if (Array.isArray(this.users)) { 
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    this.paginatedUsers = this.users.slice(startIndex, startIndex + this.usersPerPage);
  }
  }
  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= Math.ceil(this.users.length / this.usersPerPage)) {
      this.currentPage = newPage;
      this.updatePaginatedUsers();
    }
  }
}


