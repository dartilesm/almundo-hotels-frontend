import { ScrollingModule } from '@angular/cdk/scrolling';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DirectoryPipe } from './pipes/directory.pipe';
import { FillPipe } from './pipes/fill.pipe';


registerLocaleData(localeEs, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    HotelComponent,
    FillPipe,
    DirectoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FontAwesomeModule,
    AccordionModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
