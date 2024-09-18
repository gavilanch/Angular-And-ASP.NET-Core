import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, 
    GenericListComponent, MatButtonModule, MatIconModule, RouterLink, SweetAlert2Module],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  @Input({ required: true })
  movies!: any[];

  @Output()
  deleted = new EventEmitter<void>();

  moviesService = inject(MoviesService);

  delete(id: number){
    this.moviesService.delete(id)
    .subscribe(() => {
      this.deleted.emit();
    });
  }

}
