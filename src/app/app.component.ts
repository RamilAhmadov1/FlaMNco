import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {LoadingAnimationComponent} from "./loading-animation/loading-animation.component";
import {NotificationService} from "./services/notification.service";
import {NotificationComponent} from "./notification/notification.component";
import { HttpClientModule } from '@angular/common/http'; // Add this import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoadingAnimationComponent, NgIf, NotificationComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  notificationService: NotificationService = inject(NotificationService);
  title = 'client';
}
