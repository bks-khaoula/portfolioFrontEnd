import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Conference } from 'src/app/model/model.conference';
import { Localisation } from 'src/app/model/model.localisation';
import { Comite } from 'src/app/model/model.comite';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ConferenceService{
    public host:string="http://localhost:8080";
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
public getResource(url){
    return this.http.get(this.host+url);
}


saveComite(comite:Comite){
    return this.http.post<Comite>("http://localhost:8080/comites",comite);

}

savecomiteavecconfe(formData: FormData)
{
    return this.http.post("http://localhost:8080/comite/add",formData)
}
public deletmembre(url){
   return this.http.delete(url);
}


getconference(){
    return this.http.get("http://localhost:8080/conferences");
}


   

  saveConf(formData: FormData){
    return this.http.post(this.host +'/conference/photoConference',formData);

} 

}