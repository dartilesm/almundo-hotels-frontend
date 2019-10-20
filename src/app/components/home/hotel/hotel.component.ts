import { DIRECTORY } from './../../../constants/directory.enum';
import { IHotel } from './../../../models/hotel';
import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  @Input() hotel: IHotel;
  faStar = faStar;
  directory = DIRECTORY;

  constructor() { }

}
