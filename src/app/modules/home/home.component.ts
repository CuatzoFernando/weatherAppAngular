import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IResponse, ILists, IWeather } from 'src/app/shared/interfaces';
import { WeatherService } from 'src/app/shared/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sidebarExpanded = true;

  ngOnInit(): void {}

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  weatherAll: ILists[] = [];
  showInformation: boolean = false;
  closeResult: string = '';
  weatherSingle: ILists[] = [];

  constructor(
    private weather: WeatherService,
    private modalService: NgbModal
  ) {}

  processData(response: any) {
    const res = response as IResponse;
    this.collectionSize = res.list.length;
    if (this.collectionSize) {
      this.showInformation = true;
      res.list.map((m) => {
        this.weatherAll.push(m as ILists);
      });
    }
  }

  processSingleCity(content: any, id: any) {
    this.weatherSingle = [];
    this.weather.getWeatherByID(id).subscribe((response: ILists) => {
      const image = response.weather as IWeather[];
      response.image = `http://openweathermap.org/img/wn/${image[0].icon}@2x.png`;
      response.description = image[0].description;
      this.weatherSingle.push(response);
    });
    this.open(content);
  }

  open(content: any) {
    this.modalService
      .open(content, {
        // fullscreen: true,
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
