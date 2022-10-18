import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {


  personName: string = '';
  personEyes: string = '';
  personHair: string = '';
  personSkin: string = '';
  personHeight: string = '';
  personWeight: string = '';


  addFormGroup = new FormGroup({
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
