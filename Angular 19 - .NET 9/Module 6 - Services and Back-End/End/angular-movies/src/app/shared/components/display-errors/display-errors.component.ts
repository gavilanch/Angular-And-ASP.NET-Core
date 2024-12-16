import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display-errors',
    imports: [],
    templateUrl: './display-errors.component.html',
    styleUrl: './display-errors.component.css'
})
export class DisplayErrorsComponent {
  @Input({required: true})
  errors!: string[]
}
