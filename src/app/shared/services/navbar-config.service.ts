// src/app/services/navbar-config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../menuItemModel';

@Injectable({
  providedIn: 'root',
})
export class NavbarConfigService {
  private configUrl = 'assets/menuItem-config.json';

  constructor(private http: HttpClient) {}

  getNavbarItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.configUrl);
  }
}
