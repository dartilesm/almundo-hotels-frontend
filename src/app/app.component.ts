import { DIRECTORY } from './constants/directory.enum';
import { Debounce } from './decorators/debounce';
import { Component, ElementRef, HostListener, ViewChild, OnInit, AfterViewChecked, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HotelComponent } from './components/home/hotel/hotel.component';
import { IHotel } from './models/hotel';
import { HotelsService } from './services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('hotelItem', { read: ElementRef, static: false }) hotelItem: ElementRef<HotelComponent>;
  hotels: Observable<IHotel[]>;
  hotelItemSize = 270;
  directory = DIRECTORY;
  constructor(private hotelsService: HotelsService) {
    this.setHotels();
  }

  @HostListener('window:resize')
  @Debounce(1000)
  getHotelItemSize() {
    this.hotelItemSize = ((((this.hotelItem || {} as any).nativeElement as any) || {} as any).firstElementChild || {}).offsetHeight;
    console.log((this.hotelItem.nativeElement as any).firstElementChild, this.hotelItemSize);
  }

  setHotels(filters = {}): void {
    this.hotels = this.hotelsService.get(filters);
    this.hotels.toPromise().then(() => this.getHotelItemSize());
  }
}
