import { Component } from '@angular/core';
import { NotificationIconComponent } from "../../shared/components/notification-icon/notification-icon.component";

@Component({
  selector: 'app-navbar',
  imports: [NotificationIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {}
