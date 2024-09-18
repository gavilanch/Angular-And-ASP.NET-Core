import { Component } from '@angular/core';
import { TheaterCreationDTO } from '../theaters.models';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-create-theater',
  standalone: true,
  imports: [TheatersFormComponent],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css'
})
export class CreateTheaterComponent {

    saveChanges(theater: TheaterCreationDTO){
      console.log('creating the theater', theater);
    }
}
