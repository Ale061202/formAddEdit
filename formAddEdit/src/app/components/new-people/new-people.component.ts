import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {


  personName: string | null = '';
  personEyes: string | null = '';
  personHair: string | null = '';
  personSkin: string | null = '';
  personHeight: string | null = '';
  personWeight: string | null = '';

  addFormGroup = new FormGroup({
    nameFormControl: new FormControl('',[Validators.required,Validators.minLength(4)]),
    eyesFormControl: new FormControl('',[Validators.required,Validators.maxLength(9)]),
    hairFormControl: new FormControl('',Validators.required),
    skinFormControl: new FormControl('',Validators.required),
    heightFormControl: new FormControl('',[Validators.required, Validators.minLength(3)]),
    weightFormControl: new FormControl('',[Validators.required, Validators.minLength(3)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Se envia el formulario de un nuevo personaje')
    this.personName = this.addFormGroup.controls.nameFormControl.value;
    this.personEyes = this.addFormGroup.controls.eyesFormControl.value;
    this.personHair = this.addFormGroup.controls.hairFormControl.value;
    this.personSkin = this.addFormGroup.controls.skinFormControl.value;
    this.personHeight = this.addFormGroup.controls.heightFormControl.value;
    this.personWeight = this.addFormGroup.controls.weightFormControl.value;
    console.log(this.personName)
  }
}
