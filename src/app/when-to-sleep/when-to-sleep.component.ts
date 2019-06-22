import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimeService} from '../service/time.service';
import {Subscription} from 'rxjs';
import {LoadingService} from '../service/loading.service';

@Component({
  selector: 'app-when-to-sleep',
  templateUrl: './when-to-sleep.component.html',
  styleUrls: ['./when-to-sleep.component.sass']
})
export class WhenToSleepComponent implements OnDestroy {

  timeToSleep;
  loading;
  subscription: Subscription;
  loadingSubscription: Subscription;

  constructor(private timeService: TimeService, private loadingService: LoadingService) {
    this.subscription = this.timeService.getToSleep().subscribe(res => {
      this.timeToSleep = res || [];
    });
    this.loadingSubscription = this.loadingService.getLoading().subscribe(res => {
      console.log(res);
      this.loading = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
