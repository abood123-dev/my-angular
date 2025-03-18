import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user: any;
  Userid:number=1;
  constructor(private data:UserserviceService){}
  
     fetchuser() {
      this.data.getUserbyid(this.Userid).subscribe((res)=>
      {
        console.log(res);
        this.user=res
     })
     } 
  }

