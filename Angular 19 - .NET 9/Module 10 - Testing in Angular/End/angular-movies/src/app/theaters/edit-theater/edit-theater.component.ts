import { Component, Input, numberAttribute } from '@angular/core';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';
import { EditEntityComponent } from "../../shared/components/edit-entity/edit-entity.component";

@Component({
    selector: 'app-edit-theater',
    imports: [EditEntityComponent],
    templateUrl: './edit-theater.component.html',
    styleUrl: './edit-theater.component.css',
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useClass: TheatersService }
    ]
})
export class EditTheaterComponent {
  @Input({transform: numberAttribute})
  id!: number;
  theatersForm = TheatersFormComponent;
}
