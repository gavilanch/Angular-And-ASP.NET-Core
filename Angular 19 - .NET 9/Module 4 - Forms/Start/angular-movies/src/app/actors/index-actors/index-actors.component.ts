import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-index-actors',
    imports: [MatButtonModule, MatIconModule, RouterLink],
    templateUrl: './index-actors.component.html',
    styleUrl: './index-actors.component.css'
})
export class IndexActorsComponent {

}
