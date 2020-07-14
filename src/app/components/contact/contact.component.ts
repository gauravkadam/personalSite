import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user['gk'];
  }
}
