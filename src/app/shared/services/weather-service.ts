import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = environment.apiUrl;
  private key = environment.apiKey;
  constructor(private http: HttpClient) {}

  getWeather(ciudad: string) {
    return this.http.get(
      `${this.url}find?q=${ciudad}&appid=${this.key}&units=metric&lang=sp`
    );
  }

  getWeatherByID(id: number) {
    return this.http.get(
      `${this.url}weather?id=${id}&appid=${this.key}&units=metric&lang=es`
    );
  }
}
