import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { ListsComponent } from './lists/lists.component';
import { WidgetsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg-2';
@NgModule({
  declarations: [
    BookingsComponent,
    ListsComponent,
  ],
  imports: [CommonModule, BookingsRoutingModule, WidgetsModule, InlineSVGModule],
})
export class BookingsModule {}
