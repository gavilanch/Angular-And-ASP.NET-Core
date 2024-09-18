import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ActorCreationDTO, ActorDTO } from '../actors.models';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorsService } from '../actors.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { extractErrors } from '../../shared/functions/extractErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { Router } from '@angular/router';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { EditEntityComponent } from "../../shared/components/edit-entity/edit-entity.component";

@Component({
  selector: 'app-edit-actor',
  standalone: true,
  imports: [ActorsFormComponent, LoadingComponent, DisplayErrorsComponent, EditEntityComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css',
  providers: [
    {provide: CRUD_SERVICE_TOKEN, useClass: ActorsService}
  ]
})
export class EditActorComponent {
 
  @Input({transform: numberAttribute})
  id!: number;
  actorsForm = ActorsFormComponent;

}
