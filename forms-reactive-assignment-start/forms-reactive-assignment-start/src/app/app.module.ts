import { ProjectAsyncValidatorDirective } from './project-validator.async';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectValidatorDirective } from './project-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectValidatorDirective,
    ProjectAsyncValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
