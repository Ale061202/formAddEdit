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
  people$!: Observable<People>;
  personName: string = '';
  personEyes: string = '';
  personHair: string = '';
  personSkin: string = '';
  personHeight: string = '';
  personWeight: string = '';


  editFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.personName, [Validators.required,Validators.minLength(4)]),
    eyesFormControl: new FormControl(this.personEyes, [Validators.required,Validators.maxLength(9)]),
    hairFormControl: new FormControl(this.personHair, Validators.required),
    skinFormControl: new FormControl(this.personSkin, Validators.required),
    heightFormControl: new FormControl(this.personHeight, [Validators.required, Validators.minLength(3)]),
    weightFormControl: new FormControl(this.personWeight, [Validators.required, Validators.minLength(3)])
  })

  constructor(private route: ActivatedRoute, private router: Router, private service: CharactersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.people$ = this.service.getCharacters(id)
  }

  onSubmit() {
    alert('Se envia el formulario de un nuevo personaje')
  }

}
