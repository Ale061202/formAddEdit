import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialImportsModule } from './modules/material-imports.interface';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { NewPeopleComponent } from './components/new-people/new-people.component';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    NewPeopleComponent,
    EditPeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
