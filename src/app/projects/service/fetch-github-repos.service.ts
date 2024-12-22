import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchGithubReposService {
  private readonly API_URL = 'https://api.github.com/users/milkywayhalo/repos';

  private http = inject(HttpClient);

  fetchUserRepos(): Observable<any[]> {
    const url = `${this.API_URL}`;
    return this.http.get<any[]>(url);
  }
}
