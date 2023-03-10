import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'bookings',
    loadChildren: () =>
      import('../modules/bookings/bookings.module').then(
        (m) => m.BookingsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'custom-booking',
    loadChildren: () =>
      import('../modules/custom-booking/custom-booking.module').then((m) => m.CustomBookingModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/configuration',
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
