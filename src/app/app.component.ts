import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSideComponent } from "./core/components/menu-side/menu-side.component";
import { BodyLayoutComponent } from './core/components/body-layout/body-layout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuSideComponent, BodyLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Portafolio-24';
}
