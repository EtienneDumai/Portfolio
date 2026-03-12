import { Component } from '@angular/core';
import { Skills, SkillsPerso } from '../../data/data';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-skills-component',
  imports: [KeyValuePipe],
  templateUrl: './skills-component.html',
  styleUrls: ['./skills-component.css'],
})
export class SkillsComponent {
  skills = SkillsPerso;

  groupedSkills: Record<string, Skills[]> = this.skills.reduce(
    (acc: Record<string, Skills[]>, skill: Skills) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );
}