import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <ul>
        <li><a [routerLink]="['']">Home</a></li>
        <li><a [routerLink]="['users']">Users</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab13';
}
