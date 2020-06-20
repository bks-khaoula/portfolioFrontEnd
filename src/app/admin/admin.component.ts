import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/services/conference.service';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  conferences;
  constructor(public service:ConferenceService,private route:Router) { }

  ngOnInit(): void {
    this.getConference();
    
  }



  private getConference(){
    this.service.getconference()
    .subscribe(data=>{
      this.conferences=data;
    },err=>{
      console.log(err);
    })
  }



}
