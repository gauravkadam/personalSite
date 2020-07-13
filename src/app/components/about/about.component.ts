import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user['gk'];
  }

  downloadCV(){
    window.open(this.userInfo.about.resumeLink, '_blank')
  }

}
