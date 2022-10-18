import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';
import { NewPeopleComponent } from './components/new-people/new-people.component';


const routes: Routes = [
  {path: 'characters', component: CharactersListComponent,pathMatch: 'full'},
  {path: 'newPeople', component: NewPeopleComponent, pathMatch: 'full'},
  {path: 'editPeople/:id', component: EditPeopleComponent, pathMatch: 'full'},
  {path: '' , redirectTo: '/characters', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }