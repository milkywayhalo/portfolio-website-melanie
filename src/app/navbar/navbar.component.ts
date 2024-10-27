import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Observable } from 'rxjs';
import { NavbarConfigService } from '../services/navbar-config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private http: HttpClient,
    private navbarService: NavbarConfigService
  ) {}

  ngOnInit() {
    this.navbarService.getNavbarItems().subscribe(
      (data) => {
        this.items = data; // Setze die Items auf das empfangene Array
        console.log(this.items); // Protokolliere das Array
      },
      (error) => {
        console.error('Fehler beim Laden der Navbar-Items:', error); // Fehlerbehandlung
      }
    );
  }
}
