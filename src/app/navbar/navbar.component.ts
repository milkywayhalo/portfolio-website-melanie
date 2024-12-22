import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NavbarConfigService } from '../services/navbar-config.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private http: HttpClient,
    private navbarService: NavbarConfigService,
    private router: Router
  ) {}

  ngOnInit() {
    this.navbarService.getNavbarItems().subscribe(
      (data) => {
        // Verarbeite jedes Item, um eine Navigation zu ermöglichen
        this.items = data
          .filter((item) => item.visible) // Nur sichtbare Elemente laden
          .map((item) => ({
            ...item,
            command: () => this.router.navigate([item.route]), // Füge Navigationsbefehl hinzu
          }));
      },
      (error) => {
        console.error('Fehler beim Laden der Navbar-Items:', error);
      }
    );
  }
}
