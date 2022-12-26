import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {


  private saveForm$: Subject<boolean> = new Subject()

  constructor() { }



  set saveForm(save: boolean) {
    this.saveForm$.next(save);
  }

  get saveForm(): any {
    return this.saveForm$.asObservable();
  }

}
