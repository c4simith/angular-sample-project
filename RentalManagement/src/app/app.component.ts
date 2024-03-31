import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RentalComponent } from './rental/rental.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentalManagement';
}
