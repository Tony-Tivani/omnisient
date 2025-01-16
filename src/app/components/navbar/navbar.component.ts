import { Component } from '@angular/core';
import { NotificationIconComponent } from "../../shared/components/notification-icon/notification-icon.component";
import { DropdownIconComponent } from "../../shared/components/dropdown-icon/dropdown-icon.component";

@Component({
  selector: 'app-navbar',
  imports: [NotificationIconComponent, DropdownIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {}
