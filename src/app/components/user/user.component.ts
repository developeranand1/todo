import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  showBasic: boolean = true;
  showPersonal: boolean = false;
  showAddressForm: boolean = false;

  showBasicDetails() {
    this.showBasic = true;
    this.showPersonal = false;
    this.showAddressForm = false;
  }

  showPersonalDetails() {
    this.showBasic = false;
    this.showPersonal = true;
    this.showAddressForm = false;
  }

  showAddress() {
    this.showBasic = false;
    this.showPersonal = false;
    this.showAddressForm = true;
  }
}
