import { inject, Injectable } from '@angular/core';
import { Formation, Formations } from '../../data/data';
import { defer, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private readonly http = inject(HttpClient);
  public getAllFormation() : Observable<Formation[]> {
      // defer: recrée l'observable à chaque subscribe (utile si tu modifies le mock)
      return defer(() => of(Formations)).pipe(
        // optionnel: tri stable par date desc
        map(formation =>
          [...formation].sort((a, b) => b.date_debut.getTime() - a.date_debut.getTime())
        )
      );
    }
}
