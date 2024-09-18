import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-theater',
  standalone: true,
  imports: [],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css'
})
export class EditTheaterComponent {
  @Input({transform: numberAttribute})
  id!: number;
}
