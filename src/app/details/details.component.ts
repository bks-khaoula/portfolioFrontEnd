import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceService } from 'src/services/conference.service';
import { Conference } from '../model/model.conference';
import { error } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public currentconference;
  public localisations;
  constructor(private router:Router,public service:ConferenceService,
    private  route:ActivatedRoute) { }

  ngOnInit(): void {
    
this.getdetais();

  }

  getdetais(){
    let id=this.route.snapshot.params.id;
    this.service.getDetails(this.service.host+"/conferences/"+id).subscribe(data=>{
    this.currentconference=data;
    },error=>{
      console.log(error);
    })
  }

  getlocal(c){
    this.service.getLocalisation(c)
    .subscribe(data=>{
      this.localisations=data;
    },err=>{
      console.log(err);
    })

  }

}
