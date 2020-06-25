import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/services/conference.service';

import {ActivatedRoute, Router} from '@angular/router';
import { Conference } from '../model/model.conference';
import { Localisation } from '../model/model.localisation';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  conferences;
  conference:Conference=new Conference();
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

 
  onUpdateProduct(data) {
    this.service.patchResource(this.service.host+'/conferences/editConf',data)
      .subscribe(d=>{
        data.acceptation = !data.acceptation
      },err=>{
        console.log(err);
      })
  }

  accepte(conferences){
    this.service.patchResource(conferences.id,conferences.acceptation)
    .subscribe(data=>{
      conferences.acceptation = !conferences.acceptation
    },error=>{
      console.log(error);
    })

  }


  ondelet(c){
    let conf=confirm("suuuur !!!");
    if(conf){
      this.service.deletmembre(c._links.self.href)
      .subscribe(data=>{
        this.getConference();
      },err=>{
        console.log(err);
      })
    }
  }
 

 
}
