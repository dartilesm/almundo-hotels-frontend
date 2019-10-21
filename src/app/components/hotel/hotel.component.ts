import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DIRECTORY } from '../../constants/directory.enum';
import { IHotel } from '../../models/hotel';

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
