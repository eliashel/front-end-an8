import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import Environment from '../model/Environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {

  uriService = environment.baseUrl + '/environment';

  constructor ( private http: HttpClient ) { }

  createEnvironment ( id: String, name: String, description: String, type: String, state: String, creationDate: Date ) {
    console.log(`S:createEnvironment: INI (${id}, ${name}, ${description}, ${type}, ${creationDate})`);

    const environmentEntity = {
      id, 
      name, 
      description, 
      type, 
      state, 
      creationDate
    };

    console.log ( `S:createEnvironment: HTTP POST: ${this.uriService}: ${JSON.stringify(environmentEntity)}` );
    var response = this.http.post ( `${this.uriService}`, environmentEntity );

    console.log ( "S:createEnvironment: END" );
    return response;
  }

  getEnvironments ( ) {
    console.log(`S:getEnvironments(): INI : HTTP GET: ${this.uriService} : END`);
    return this.http.get ( `${this.uriService}` );
  }

  editEnviornment ( id: String ) {
    console.log(`S:editEnviornment ( ${id} ): INI : HTTP GET: ${this.uriService}?type=single&id=${id} : END`);
    return this.http.get ( `${this.uriService}?type=single&id=${id}` );
  }

  //updateEnvironment ( id: String, name: String, description: String, type: String, state: String, creationDate: Date ) {
  updateEnvironment ( environment: Environment ) {
    //console.log(`S:updateProduct: INI (${id}, ${name}, ${description}, ${type}, ${state}, ${creationDate})`);

    /*
    const environmentEntity = {
      id, 
      name, 
      description, 
      type, 
      state, 
      creationDate
    };
    */
    
    //console.log ( `S:updateProduct: HTTP PATCH: ${this.uriService}/${id}: ${environmentEntity}` );
    var response = this.http.patch ( `${this.uriService}/${environment.id}`, environment );

    console.log ( "S:updateProduct: END" );
    return response;
  }

  deleteEnvironment ( id: String ) {
    console.log(`S:deleteEnvironment ( ${id} ): INI : HTTP DELETE: ${this.uriService}?type=single&id=${id} : END`);
    return this.http.delete ( `${this.uriService}?type=single&id=${id}` );
  }
  
}
