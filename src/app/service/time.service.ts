import {Injectable} from '@angular/core';
import {Time} from '../model/time';
import {Observable, Subject} from 'rxjs';
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time: Time = {
    toSleep: '',
    message: '',
  };
  timeToSleep;

  private subject = new Subject<any>();

  constructor(private loadingService: LoadingService) {
  }

  setToSleep(value) {
    setTimeout(() => {
        this.loadingService.setLoading(false);
        this._builder(value);
        this.subject.next(this.time);
      },
      1000);
    this.loadingService.setLoading(true);
  }

  getToSleep(): Observable<any> {
    return this.subject.asObservable();
  }

  _builder(value) {
    if (this._isNumber(value)) {
      this._formatNumber(value);
    } else if (this._isEmpty(value)) {
      this.time.message = 'A time can never be empty.';
    } else {
      this.time.message = 'A time consists of number and never of others.';
    }
  }

  _formatNumber(value) {
    if (value === 0) {
      this.timeToSleep = '0000';
    } else if (value < 1000 && value >= 100) {
      this.timeToSleep = '0' + value;
    } else if (value < 100 && value >= 10) {
      this.timeToSleep = '00' + value;
    } else if (value < 10 && value > 0) {
      this.timeToSleep = '000' + value;
    } else {
      this.timeToSleep = value;
    }
    this.time.message = 'You should sleep by ' + String(this.timeToSleep) + '.';
  }

  _isNumber(value: string | number): boolean {
    return ((value != null) && !isNaN(Number(value.toString())));
  }

  _isEmpty(value): boolean {
    return value === '';
  }

}
