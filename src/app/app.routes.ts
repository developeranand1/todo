import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BookingTicketComponent } from './components/booking-ticket/booking-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: UserComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path:'booking-tickets',
    component:BookingTicketComponent
  },
  {
    path:'ticket-list',
    component:TicketListComponent
  }
];
