import { IFilters } from './../../../models/filters';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCaretUp, faCaretDown, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() filter = new EventEmitter();
  filters: IFilters = {};
  toggleAllStars: boolean;
  faSearch = faSearch;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  faStar = faStar;
  stars = [
    { selected: false, star: '5' },
    { selected: false, star: '4' },
    { selected: false, star: '3' },
    { selected: false, star: '2' },
    { selected: false, star: '1' }
  ]

  constructor() { }

  ngOnInit() {
  }

  setFilter() {
    this.filter.emit(this.filters);
  }

  setStars(allStars: boolean) {
    if (allStars) {
      this.stars.forEach(star => star.selected = this.toggleAllStars);
    } else {
      this.toggleAllStars = this.stars.every(star => star.selected);
    }
    const selectedStars = this.stars.filter(star => star.selected).map(({ star }) => star);
    this.filters.stars = selectedStars.length ? JSON.stringify(selectedStars) : '';
    this.setFilter();
  }

}
