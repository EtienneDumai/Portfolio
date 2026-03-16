import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  standalone:true,
  imports: [DatePipe],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  @Input() id !: number;
  @Input() nom !:string;
  @Input() date_debut !: Date;
  @Input() date_fin !: Date;
  @Input() etablissement !:string
  @Input() lieu !:string;
  @Input() pays !: string;
  @Input() mention?:string;
}
