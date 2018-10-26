import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'devops angular project';
  public users;
  constructor(private userService: UserService) {
    this.getUsers();
  }
  
    getUsers() {
       this.userService.getUsers().subscribe(
          data => { this.users = data},
          err => console.error(err),
          () => console.log('done loading users')
        );
      }

}
