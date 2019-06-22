import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Time} from '../model/time';
import {TimeService} from '../service/time.service';

@Component({
  selector: 'app-when-input',
  templateUrl: './when-input.component.html',
  styleUrls: ['./when-input.component.sass']
})
export class WhenInputComponent implements OnInit {

  whenToWakeForm;

  constructor(private formBuilder: FormBuilder, private timeService: TimeService) {
    this.whenToWakeForm = this.formBuilder.group({
      timeToWake: '0800',
    });
  }

  ngOnInit() {
  }

  clearInput() {
  }

  calculateTimeToSleep(form) {
    const calc = Number(form.timeToWake) - 800;

    if (calc < 0) {
      this.timeService.setToSleep(2400 + calc);
    } else {
      this.timeService.setToSleep(calc);
    }

  }

}
