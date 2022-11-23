import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from 'src/app/shared/services';
import { IResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  buscar: string = '';

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() weatherData: EventEmitter<IResponse> =
    new EventEmitter<IResponse>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  async search() {
    this.weather.getWeather(this.buscar).subscribe((response) => {
      this.weatherData.emit(response as IResponse);
    });
  }
}
