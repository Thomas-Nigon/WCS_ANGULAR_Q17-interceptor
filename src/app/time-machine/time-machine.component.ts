import { Component } from '@angular/core';
import { DataService } from '../datafetcher.service';

@Component({
  selector: 'app-time-machine',
  templateUrl: './time-machine.component.html',
  styleUrl: './time-machine.component.scss',
})
export class TimeMachineComponent {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    console.log('entering getData method');
    this.dataService
      .fetchData()
      .subscribe
      /*    (data) => {
        this.data = data;
        console.log('Data received:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      } */
      ();
  }
}
