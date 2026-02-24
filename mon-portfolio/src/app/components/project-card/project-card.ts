import { DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Technology } from '../../data/data';

@Component({
  selector: 'app-project-card',
  standalone:true,
  imports: [CardModule, ButtonModule, DatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectCard implements OnInit{

  @HostBinding('class') class = 'contents';
  @Input() id !:number;
  @Input() nom !: string;
  @Input() description!:string;
  @Input() date_debut !: Date;
  @Input() date_fin ?: Date;
  @Input() status !: "En cours" | "Terminé";
  @Input() type!: "Scolaire" | "Professionel" | "Personnel";
  @Input() stack?: Technology[];
  @Input() roles?: string[];
  @Input() imageUrl?: string;
  @Input()  lienGithub?: string;
  @Input()  lienDemo?: string;
  ngOnInit(): void {

  }
  getImageUrl(image_url: string): string {
    if (!image_url) return '';
    if (image_url.startsWith('http')) return image_url;
    return 'http://localhost:8000' + image_url;
  }
}
