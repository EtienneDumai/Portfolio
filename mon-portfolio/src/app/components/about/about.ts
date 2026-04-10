import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '5',    label: 'Projets réalisés' },
    { value: '3',    label: 'Années de formation' },
    { value: '20+',  label: 'Technologies maîtrisées' },
    { value: '2026', label: 'Diplôme BUT Informatique' },
  ];
}
