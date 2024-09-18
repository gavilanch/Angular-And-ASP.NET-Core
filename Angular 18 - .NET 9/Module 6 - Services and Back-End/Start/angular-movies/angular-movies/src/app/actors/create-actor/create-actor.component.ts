import { Component } from '@angular/core';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-create-actor',
  standalone: true,
  imports: [ActorsFormComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {

  saveChanges(actor: ActorCreationDTO){
    console.log('creating the actor', actor);
  }

}
