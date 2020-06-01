import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class BackgroundService {

  subject: Subject<string>;

  constructor() {
    this.subject = new Subject<string>();
  }

  openBackground() {
    this.subject.next('out');
  }

  getObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  closeBackground() {
    this.subject.next('void');
  }
}
