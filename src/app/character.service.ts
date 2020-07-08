import { Injectable } from '@angular/core';
import { Character ,Parameter,PARAMETER } from './character';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private RealParameter:Parameter[] = PARAMETER;

  constructor(

) { }

  getParameter(): Observable<Parameter[]> {
    return of(this.RealParameter);
  }


}
