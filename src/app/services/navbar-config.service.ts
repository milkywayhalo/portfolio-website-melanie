// src/app/services/navbar-config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NavbarItem {
  label: string;
  route: string;
  icon: string;
  visible: boolean;
  roles?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class NavbarConfigService {
  private configUrl = 'assets/menuItem-config.json';

  constructor(private http: HttpClient) {}

  getNavbarItems(): Observable<NavbarItem[]> {
    return this.http.get<NavbarItem[]>(this.configUrl);
  }
}
