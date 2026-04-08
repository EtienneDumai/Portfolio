import { Component } from '@angular/core';
import { Formations } from '../../data/data';
import { EducationCard } from '../education-card/education-card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  formations = Formations;
}
