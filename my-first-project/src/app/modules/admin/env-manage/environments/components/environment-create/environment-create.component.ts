import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnvironmentsService } from '../../services/environments.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment-create',
  templateUrl: './environment-create.component.html',
  styleUrls: ['./environment-create.component.css']
})
export class EnvironmentCreateComponent implements OnInit {

  environmentForm: FormGroup;
  
  constructor ( private formBuilder: FormBuilder, private environmentsService: EnvironmentsService, 
      private router: Router, private spinner: NgxSpinnerService ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.environmentForm = this.formBuilder.group ({
      //id: string;
      Id: [ '' ],
      //name: string;
      Name: [ '', Validators.required ],
      //description: string;
      Description: [ '' ],
      //type: string;
      Type: [ '', Validators.required ],
      //status: string;
      Status: [ '', Validators.required ],
      //creationDate: Date
      CreationDate: [ '' ]
    });
  }

  createEnvironment(name: String, description: String, type: String, status: String) {
    console.log(`C:createEnvironment: INI (${name}, ${description}, ${type}, ${status})`);
    this.spinner.show();

    this.environmentsService.createEnvironment( "", name, description, type, status, new Date()).subscribe ( 
      ok => {
        console.log("C:createEnvironment: OK: " + JSON.stringify(ok) )
        this.spinner.hide();
        this.router.navigateByUrl("/environments");
      }, 
      error => {
        console.log("C:createEnvironment: ERROR: " + JSON.stringify(error) );
        this.spinner.hide();
      } 
    );
    
    console.log ( "C:createEnvironment: END: Waiting service: this.environmentsService.createEnvironment()." );
  }

}
