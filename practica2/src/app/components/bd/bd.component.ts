import { Component, OnInit } from '@angular/core';

import { MostrarusuariosService} from 'src/app/services/mostrarusuarios/mostrarusuarios.service';


@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent implements OnInit {
  Users: any 
  
  constructor(private mostrar:MostrarusuariosService) { 
    
  }

  ngOnInit(): void {
///comentin
    this.Users=this.getUserfromback()
  }
  getUserfromback(){
    return this.mostrar.getUser();
  }
  deleteuser(correo:string){
    let confirmacion=this.mostrar.deleteuser(correo);
    if (confirmacion)
      alert('Usuario eliminado con exito');
    else alert('Imposible eliminar el usuario');
    return confirmacion;
  }

}
