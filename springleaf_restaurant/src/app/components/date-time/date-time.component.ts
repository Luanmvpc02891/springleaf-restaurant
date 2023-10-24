import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class DateTimeComponent {

  dateTimeWorker: Worker;
  currentTime: Date = new Date();
  hours: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  seconds: number[] = Array.from({ length: 60 }, (_, index) => index + 1);
  //hourDegrees: number = 0;
  //minuteDegrees: number = 0;
  //secondDegrees: number = 0;

  constructor(private el: ElementRef) {
    this.dateTimeWorker = new Worker(new URL('../../workers/date-time.worker', import.meta.url));
  }

  ngOnInit() {

    this.dateTimeWorker.postMessage('start');

    this.dateTimeWorker.onmessage = (event) => {
      this.currentTime = event.data;
    };
  }

  get hourHandTransform() {
    const hours = this.currentTime.getHours() % 12;
    const minutes = this.currentTime.getMinutes();
    const hourDegrees = (hours * 30) + (0.5 * minutes);
    return `rotate(${hourDegrees}deg)`;
  }

  get minuteHandTransform() {
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();
    const minuteDegrees = (minutes * 360 / 60) + (seconds * 6 / 60);
    return `rotate(${minuteDegrees}deg)`;
}

  get secondHandTransform() {
    const seconds = this.currentTime.getSeconds();
    const secondDegrees = seconds * 6;
    return `rotate(${secondDegrees}deg)`;
  }

  ngOnDestroy() {
    this.dateTimeWorker.terminate(); // Khi component bị hủy, dừng Web Worker
  }

}
