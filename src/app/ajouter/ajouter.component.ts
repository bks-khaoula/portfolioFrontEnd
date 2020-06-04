import { Component, OnInit } from '@angular/core';
import { Conference } from '../model/model.conference';
import { HttpClient } from '@angular/common/http';
import { ConferenceService } from 'src/services/conference.service';
import { Localisation } from '../model/model.localisation';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Comite } from '../model/model.comite';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  reactiveForm = new FormGroup({
    longitude: new FormControl(''),
    latidude: new FormControl(''),
    altitude: new FormControl(''),
    Adresse: new FormControl(''),
    Ville: new FormControl(''),
    Pays: new FormControl(''),
    
    });

    reactiveForm2 = new FormGroup({
     
      description: new FormControl('')
      });
      reactiveForm3 = new FormGroup({
        date_debut: new FormControl(''),
        date_fin: new FormControl('')
        
        });
        reactiveForm4 = new FormGroup({
          titre: new FormControl(''),
          categorie: new FormControl(''),
          image: new FormControl('')
          
          });
          reactiveForm5 = new FormGroup({
            nom: new FormControl(''),
            prenom: new FormControl(''),
            tel: new FormControl(''),
            email: new FormControl(''),
            categorie: new FormControl('')
            });

  latitude=31.63000;
  longitude=-8.00889;


  conference:Conference=new Conference();
  localisation:Localisation=new Localisation();
  comite:Comite=new Comite();
  myconference: Conference[] =[];
  mylocalisation:Localisation[]=[];
  mycomite:Comite[]=[];
  public comites:any;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private conferenceservice:ConferenceService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
   this.getComite();
   
  }


save(){
  this.conferenceservice.saveconference(this.conference)
  .subscribe((conf) => {
    this.myconference=[conf, ...this.myconference]
  })
  this.conferenceservice.savelocalisation(this.localisation)
  .subscribe((loca)=>{
    this.mylocalisation=[loca, ...this.mylocalisation]
  })
  
}
saveComite(){
this.conferenceservice.saveComite(this.comite)
.subscribe((com)=>{
  this.mycomite=[com, ...this.mycomite]
})
  
}

getComite(){

  this.conferenceservice.findAll()
  .subscribe(data=>{
    this.comites=data;
  },err=>{
    console.log(err);
  })
}

  
}
