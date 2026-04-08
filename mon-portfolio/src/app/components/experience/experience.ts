import { Component } from '@angular/core';
import { Experience, Experiences } from '../../data/data';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experiences: Experience[] = Experiences;
}
