import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'midudev'
  isLoggedIn = false;
  favGame = "";

getFavorite(gameName: string) {
  this.favGame = gameName;
}

  greet() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

}
