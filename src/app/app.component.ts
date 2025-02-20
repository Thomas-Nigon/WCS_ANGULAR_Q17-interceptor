import { Component } from '@angular/core';
import { DataService } from './datafetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Q17_interceptor';
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('init');
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
