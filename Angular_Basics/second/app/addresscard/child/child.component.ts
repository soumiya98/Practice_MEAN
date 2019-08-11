import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/user.model';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
  
export class ChildComponent implements OnInit {
  @Input("user")
  user2:User;
  constructor() { }

  ngOnInit() {
  }

}
