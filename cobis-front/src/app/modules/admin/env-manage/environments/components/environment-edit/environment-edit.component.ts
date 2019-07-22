import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnvironmentsService } from '../../services/environments.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-environment-edit',
  templateUrl: './environment-edit.component.html',
  styleUrls: ['./environment-edit.component.css']
})
export class EnvironmentEditComponent implements OnInit {

  environmentForm: FormGroup;
  
  constructor ( private activatedRoute: ActivatedRoute, private router: Router, 
      private environmentsService: EnvironmentsService, private formBuilder: FormBuilder,
      private spinner: NgxSpinnerService ) { 
    this.createForm();
  }

  ngOnInit ( ) {
    console.log(`C:EnvironmentEditComponent:ngOnInit: INI ( )`);
    this.spinner.show();

    this.activatedRoute.params.subscribe (
      params => {
        console.log ("params: " + JSON.stringify(params));
        this.environmentsService.editEnviornment ( params['id'] ).subscribe (
          environment => {
            console.log("C:EnvironmentEditComponent:ngOnInit:environmentsService.editEnviornment OK: " + JSON.stringify(environment) );
            environment['status'] = "QUEMADO";
            this.environmentForm.setValue(environment); 
            this.spinner.hide();
          }, 
          error => {
            console.log("C:EnvironmentEditComponent:ngOnInit:environmentsService.editEnviornment ERROR: " + error );
            this.spinner.hide();
          }
        );
      }
    );

    console.log ( "C:EnvironmentEditComponent:ngOnInit: END: Waiting service: this.environmentsService.editEnviornment()." );
  }

  createForm() {
    this.environmentForm = this.formBuilder.group ({
      //id: string;
      id: [ '', Validators.required ],
      //name: string;
      name: [ '', Validators.required ],
      //description: string;
      description: [ '' ],
      //type: string;
      type: [ '', Validators.required ],
      //status: string;
      status: [ '', Validators.required ],
      state: [ '' ],
      //creationDate: Date
      creationDate: [ '' ]
    });
  }

  onSubmit ( ) : void {
    this.updateEnvironment ( );
  }

  updateEnvironment ( ) {
    console.log(`C:updateEnvironment: INI (): ${this.environmentForm.value}`);
    this.spinner.show();

    this.environmentsService.updateEnvironment ( this.environmentForm.value ).subscribe (
      ok => {
        console.log("C:updateEnvironment: OK: " + JSON.stringify(ok) )
        this.spinner.hide();
        this.router.navigateByUrl("/environments");
      }, 
      error => {
        console.log("C:updateEnvironment: ERROR: " + JSON.stringify(error) );
        this.spinner.hide();
      } 
    );

    console.log ( "C:updateEnvironment: END: Waiting service: this.environmentsService.updateEnvironment()." );
  }

}
