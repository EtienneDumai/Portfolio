import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Formation } from '../../data/data';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  @Input() formation!: Formation;
  @Input() isLast = false;

  get isOngoing(): boolean {
    return this.formation.date_fin > new Date();
  }
}
