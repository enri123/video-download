import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  async sendEmail() {
    console.log("Hola")
  }
}
