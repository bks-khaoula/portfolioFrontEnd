import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Conference } from 'src/app/model/model.conference';
import { Localisation } from 'src/app/model/model.localisation';
import { Comite } from 'src/app/model/model.comite';


@Injectable({
    providedIn: 'root'
})
export class ConferenceService{

    constructor(private http: HttpClient){
    }

    
saveconference(conference:Conference){
return this.http.post<Conference>("http://localhost:8080/conferences",conference);
}

savelocalisation(localisation:Localisation){
    return this.http.post<Localisation>("http://localhost:8080/localisations",localisation);
    }

findAll(){
    return this.http.get("http://localhost:8080/comites");
}

saveComite(comite:Comite){
    return this.http.post<Comite>("http://localhost:8080/comites",comite);

}

}