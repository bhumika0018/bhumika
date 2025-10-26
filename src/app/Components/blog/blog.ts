import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule],

  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

}
