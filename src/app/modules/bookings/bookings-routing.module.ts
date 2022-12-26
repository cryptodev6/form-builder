import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    children: [
      {
        path: 'list',
        component: ListsComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
