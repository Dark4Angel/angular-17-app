import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos del {{ username }}</h3>
  <ul>
    @for (game of games; track game.id) {
    <li (click)="fav(game.name)">{{ game.name}}</li>
    }
  </ul>
`,
styles: ``,
})

export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>()

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    // alert(`A ${this.username} le gusta jugar a ${gameName}`);
  }
  games = [
  {
    id: 1,
    name: 'Uncharted 4'
  },
  {
    id: 2,
    name: 'Horizon Zero Dawn'
  },
  {
    id: 3,
    name: 'Bloodborne'
  }
]

}
