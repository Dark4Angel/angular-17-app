import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img
    src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png"
      />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Earum odio assumenda atque adipisci id nisi nihil illum
      at dicta animi! Ut illo nam minima reiciendis fugiat quibusdam
       ipsa esse expedita.
    
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;

  }`
})
export class CommentsComponent {

}
