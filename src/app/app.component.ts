import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmdb-ng';
  
  movies= ['Star Wars','Ghost Busters','Highlander','The Crow','Steets of Fire','The Matrix',
          'The Shining','The Road Warrior','Time Bandits','The Jerk'];
}
