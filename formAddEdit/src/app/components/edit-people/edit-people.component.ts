import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Se envia el formulario de un nuevo personaje')
  }

}
