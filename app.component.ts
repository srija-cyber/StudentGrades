import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,Assignment3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
