import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Experience } from '../../data/data';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  @Input() experience!: Experience;
  @Input() isLast = false;

  get isOngoing(): boolean {
    return !this.experience.date_fin || this.experience.date_fin > new Date();
  }

  get typeBadgeClass(): string {
    switch (this.experience.type) {
      case 'Stage':       return 'bg-accent-soft text-accent border-accent-border';
      case 'Alternance':  return 'bg-warn-bg text-warn border-warn-edge';
      case 'CDI':
      case 'CDD':         return 'bg-ok-bg text-ok border-ok-edge';
      default:            return 'bg-surface text-dim border-edge';
    }
  }
}
