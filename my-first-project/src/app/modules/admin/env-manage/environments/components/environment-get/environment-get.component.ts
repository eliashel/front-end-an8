import { Component, OnInit } from '@angular/core';
import Environment from '../../model/Environment';
import { EnvironmentsService } from '../../services/environments.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment-get',
  templateUrl: './environment-get.component.html',
  styleUrls: ['./environment-get.component.css']
})
export class EnvironmentGetComponent implements OnInit {

  environments : Environment[];

  constructor( private environmentsService: EnvironmentsService, private router: Router,
      private spinner: NgxSpinnerService ) {
    
  }

  ngOnInit() {
    console.log(`C:EnvironmentGetComponent:ngOnInit: INI ( )`);
    this.spinner.show();

    this.environmentsService.getEnvironments().subscribe (
      (data: Environment[]) => {
        console.log("C:EnvironmentGetComponent:ngOnInit: OK: " + JSON.stringify(data) );
        this.environments = data['Environments'][0];
        this.spinner.hide();
      },
      error => {
        console.log("C:EnvironmentGetComponent:ngOnInit: ERROR: " + error.toString() );
        this.spinner.hide();
      }
    );

    console.log ( "C:EnvironmentGetComponent:ngOnInit: END: Waiting service: this.environmentsService.getEnvironments()." );
  }

  deleteEnvironment ( id ) {
    console.log(`C:deleteEnvironment: INI ( )`);
    this.spinner.show();
    
    this.environmentsService.deleteEnvironment(id).subscribe (
      ok => {
        console.log("C:deleteEnvironment: OK: " + ok.toString() );
        this.spinner.hide();
        this.ngOnInit();
      }, 
      error => {
        console.log("C:deleteEnvironment: ERROR: " + error.toString() );
        this.spinner.hide();
      }
    );
    
    console.log ( "C:deleteEnvironment: END: Waiting service: this.environmentsService.deleteEnvironment()." );
  }

}
