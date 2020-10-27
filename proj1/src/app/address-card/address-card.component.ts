import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;
  buttonText: string = "Expand";

  constructor() {
       
   }
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed){
      this.buttonText = "Expand";
    }else{
      this.buttonText="Collapse"
    }
    
  }

  ngOnInit(): void {
  }

}
