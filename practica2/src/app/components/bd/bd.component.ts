import { Component, OnInit } from '@angular/core';

import listusers from 'src/assets/JSON/Users.json';//se importa el archivo

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent implements OnInit {
  Users: any = listusers;//se crea la variable
  constructor() { }

  ngOnInit(): void {
  }

}
