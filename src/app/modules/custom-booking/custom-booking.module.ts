import { ModalsModule } from '../../_metronic/partials/layout/modals/modals.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomBookingRoutingModule } from './custom-booking-routing.module';
import { BookingFormBuilderComponent } from "./booking-form-builder/booking-form-builder.component";
import { ClientlComponent } from "./custom-booking.component";
import { BookingFormFieldsComponent } from './booking-form-fields/booking-form-fields.component';
import { FormioModule } from "@formio/angular";


@NgModule({
  declarations: [
    ClientlComponent,
    BookingFormBuilderComponent,
    BookingFormFieldsComponent,
  ],
  imports: [
    CommonModule,
    CustomBookingRoutingModule,
    FormioModule,
    ModalsModule
  ]
})
export class CustomBookingModule { }
