import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], 
})
export class PasswordPage implements OnInit {
  successMessage = '';
  errorMessage = '';

  constructor(private router: Router) {}

  ngOnInit() {}


  goHome() {
    this.router.navigate(['/home']);
  }
}