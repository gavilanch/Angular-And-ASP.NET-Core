import { Component, inject } from '@angular/core';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorCreationDTO } from '../actors.models';
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';
import { extractErrors } from '../../shared/functions/extractErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { CreateEntityComponent } from "../../shared/components/create-entity/create-entity.component";
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';

@Component({
    selector: 'app-create-actor',
    imports: [CreateEntityComponent],
    templateUrl: './create-actor.component.html',
    styleUrl: './create-actor.component.css',
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useClass: ActorsService }
    ]
})
export class CreateActorComponent {
  actorsForm = ActorsFormComponent;
}
