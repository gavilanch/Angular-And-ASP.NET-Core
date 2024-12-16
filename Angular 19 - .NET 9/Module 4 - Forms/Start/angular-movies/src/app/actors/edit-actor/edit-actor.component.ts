import { Component, Input, numberAttribute } from '@angular/core';

@Component({
    selector: 'app-edit-actor',
    imports: [],
    templateUrl: './edit-actor.component.html',
    styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {
  @Input({transform: numberAttribute})
  id!: number;
}