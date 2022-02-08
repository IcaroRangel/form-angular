import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateFormModule } from './template-form/template-form.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, DataFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TemplateFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
