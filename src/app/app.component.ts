import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Santa City';
}


/* selector: 'app-root',
standalone: true,
imports: [RouterOutlet,  UserComponent],
template: `<h1>Hola mundo desde {{ city.toUpperCase()}} </h1>
<app-user></app-user>
<app-user/>`,
styles: ``,
}) */