import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { People } from 'src/app/interfaces/characters.interface';
import { CharactersService } from 'src/app/services/characters-list.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  
  editedCharacter: People = {} as People;
  editCharacter: FormGroup = {} as FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.formularioEditar();
  }

  formularioEditar(){
    const personajeId = this.route.snapshot.paramMap.get('id')!;
    this.characterService.getCharacters(personajeId).subscribe(resp => {
      this.editedCharacter = resp;
      this.editCharacter = new FormGroup({
        nameFormControl: new FormControl(this.editedCharacter.name),
        eyesFormControl: new FormControl(this.editedCharacter.eye_color),
        hairFormControl: new FormControl(this.editedCharacter.hair_color),
        skinFormControl: new FormControl(this.editedCharacter.skin_color),
        heightFormControl: new FormControl(this.editedCharacter.height),
        weightFormControl: new FormControl(this.editedCharacter.mass)
      });
    });
  }

  onSubmit() {
    alert('Se envia el formulario de un personaje')
  }

}
