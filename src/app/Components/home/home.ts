import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, About, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
