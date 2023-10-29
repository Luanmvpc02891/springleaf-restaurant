import { Component } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class DateTimeComponent {

  private currentTime: Date = new Date();

  hours: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  seconds: number[] = Array.from({ length: 60 }, (_, index) => index + 1);

  constructor(private dateTimeService: DateTimeService) {

  }

  ngOnInit() {

    this.dateTimeService.getCurrentTime().subscribe((time: Date) => {
      this.currentTime = time;
    });

  }

  get hourHandTransform() {
    const hours = this.currentTime.getHours() % 12;
    const minutes = this.currentTime.getMinutes();
    const hourDegrees = (hours * 30) + (minutes * 0.5);
    return `rotate(${hourDegrees}deg)`;
  }

  get minuteHandTransform() {
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();
    const minuteDegrees = (minutes * 6) + (seconds * 0.1);
    return `rotate(${minuteDegrees}deg)`;
  }

  get secondHandTransform() {
    const seconds = this.currentTime.getSeconds();
    const secondDegrees = seconds * 6;
    return `rotate(${secondDegrees}deg)`;
  }

}
