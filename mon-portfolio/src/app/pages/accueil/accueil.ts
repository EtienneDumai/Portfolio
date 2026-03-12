import { Component } from '@angular/core';
import { About } from "../../components/about/about";
import { ProjectComponent } from '../../components/project/project';
import { SkillsComponent } from '../../components/skills-component/skills-component';


@Component({
  selector: 'app-accueil',
  standalone:true,
  imports: [About, ProjectComponent, SkillsComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

}
