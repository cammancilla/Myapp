import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class InicioPage {
  user = {
    usuario: '',
    password: '',
  };

  nombreUsuario = '';

  ngOnInit() {}
  ngAfterContentInit() {
    this.user = history.state.user;
    this.nombreUsuario = this.user.usuario;
  }
}
