import { Component, inject, OnInit } from '@angular/core';
import { FormationService } from '../../services/Fomation/formation';
import { Formation, Formations } from '../../data/data';
import { EducationCard } from "../education-card/education-card";

@Component({
  selector: 'app-education',
  imports: [EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit{
  private readonly formationService = inject(FormationService);
  public listFormations !: Formation[]
  ngOnInit(){
    this.formationService.getAllFormation().subscribe({
      next: (data) => {
        this.listFormations = data;
      },
      error: (err) => {
        console.error(`Une erreur est survenue lors de la recupération des projets : ${err}`);
      }
    });
  }
}
