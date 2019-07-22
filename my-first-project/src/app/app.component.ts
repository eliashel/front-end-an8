import { Component, OnInit } from '@angular/core';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgxSpinnerService } from "ngx-spinner";
import { 
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router 
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'my-first-project';

  constructor(private loadingBar: SlimLoadingBarService, private spinner: NgxSpinnerService, 
    private router: Router) {
      this.router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    /** spinner starts on init */
    //this.spinner.show();
    
    
    //setTimeout(() => {
    //  /** spinner ends after 5 seconds */
    //  this.spinner.hide();
    //}, 5000);
  }
  
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
