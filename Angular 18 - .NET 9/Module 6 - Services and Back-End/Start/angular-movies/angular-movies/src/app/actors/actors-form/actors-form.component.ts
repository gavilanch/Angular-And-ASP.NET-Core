import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.models';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import moment from 'moment';
import { dateCannotBeInTheFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-actors-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, InputImgComponent],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {


  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}],
    dateOfBirth: new FormControl<Date | null>(null, {validators: [Validators.required, dateCannotBeInTheFuture()]}),
    picture: new FormControl<null | File | string>(null)
  })

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')){
      return "the name field is required";
    }

    return "";

  }

  getErrorMessagesForDateOfBirth(): string {
    let field = this.form.controls.dateOfBirth;

    if (field.hasError('required')){
      return "the date of birth field is required";
    }

    if (field.hasError('dateCannotBeInTheFuture')){
      return field.getError('dateCannotBeInTheFuture').message;
    }

    return "";

  }

  handleFileSelection(file: File){
    this.form.controls.picture.setValue(file);
  }

  saveChanges(){
    const actor = this.form.value as ActorCreationDTO;

    actor.dateOfBirth = moment(actor.dateOfBirth).toDate();

    if (typeof actor.picture === "string"){
      actor.picture = undefined;
    }

    this.postForm.emit(actor);
  }

}
