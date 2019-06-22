import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private subject = new Subject<any>();

  loading: boolean;

  constructor() {
  }

  setLoading(value: boolean) {
    if (value === true) {
      this.subject.next(this.loading = true);
    } else {
      this.subject.next(this.loading = false);

    }
  }

  getLoading(): Observable<any> {
    return this.subject.asObservable();
  }
}
