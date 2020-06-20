import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/services/conference.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  public conferences;

  constructor(public service:ConferenceService) { }

  ngOnInit(): void {
    this.getConferenceAccepter();
  }

  getConferenceAccepter(){
    this.service.getResource("/conferences/search/selectedConference")
    .subscribe(data=>{
      this.conferences=data;
    },err=>{
      console.log(err);
    })
  }

}
