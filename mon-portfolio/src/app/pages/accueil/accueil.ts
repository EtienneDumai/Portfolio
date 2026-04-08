import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { ProjectComponent } from '../../components/project/project';
import { SkillsComponent } from '../../components/skills-component/skills-component';
import { Education } from '../../components/education/education';
import { ExperienceComponent } from '../../components/experience/experience';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [About, ProjectComponent, SkillsComponent, Education, ExperienceComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {}
