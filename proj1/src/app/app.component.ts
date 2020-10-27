import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInst: User;
  inputText: string = "Initial value";


  constructor(){
    this.userInst = new User();
    this.userInst.name="My Name";
    this.userInst.designation="Engineer";
    this.userInst.address="1000, street, city, state";
    this.userInst.phone= [
      "1234-123-123",
      "4567-456-456"
    ]
  }
}
