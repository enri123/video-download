import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./toolbar/toolbar";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('video-download');
}
