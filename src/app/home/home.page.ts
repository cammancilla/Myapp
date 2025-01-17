import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  user = {
    usuario: '',
    password: '',
  };

  msj = '';
  carga= false;
  constructor(private router: Router, private animation: AnimationController) {}

  conectar() {
    if (this.user.usuario.length > 0 && this.user.password.length > 0) {
      if(
        this.user.usuario == 'walter' &&
        this.user.password == 'pass1234'
      ){
      let navigationExtras: NavigationExtras = {
        state: { user: this.user },
      };
      this.carga= true;
      this.msj= 'Conexion Exitosa';

      setTimeout(()=>{
        this.router.navigate(['/inicio'],navigationExtras);
        this.msj = '';
        this.carga = false;

      },3000);

     }else{
      this.msj = 'Credenciales erroneas';
     }
    
    } else {
      this.msj = 'Credenciales no pueden estar vacias';
    }
  }

  ngAfterContentInit(){
    this.animacionLogin();
  }

  animacionLogin(){
    const imagen = document.querySelector(
      '#container ion-card ion-card-header ion-img'
    ) as HTMLElement;

    const animacion = this.animation
    .create()
    .addElement(imagen)
    .duration(3000)
    .iterations(Infinity)
    .keyframes(
      [
        {offset:0, opacity:'1', border:'2px solid white', transform: 'translateX(0)'},
        {offset:0.25, opacity:'0.5', border:'2px solid red', transform:'translateX(0)'},
        {offset:1, opacity:'0.20', border:'2px solid green', transform:'translateX(0)'},
      ]
      )
  animacion.play();  
  }
}




