import { Component, OnInit } from '@angular/core';

import {users} from 'src/app/components/bd/bd'

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent implements OnInit {
  Users: any = users.Users;
  
  constructor() { 
    
  }

  ngOnInit(): void {

  }
  

}
