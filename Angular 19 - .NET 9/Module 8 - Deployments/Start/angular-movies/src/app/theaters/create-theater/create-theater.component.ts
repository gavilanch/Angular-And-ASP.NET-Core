import { Component } from '@angular/core';
import { TheaterCreationDTO } from '../theaters.models';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';
import { CreateEntityComponent } from "../../shared/components/create-entity/create-entity.component";

@Component({
    selector: 'app-create-theater',
    imports: [CreateEntityComponent],
    templateUrl: './create-theater.component.html',
    styleUrl: './create-theater.component.css',
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useClass: TheatersService }
    ]
})
export class CreateTheaterComponent {
  theaterForm = TheatersFormComponent;
}
