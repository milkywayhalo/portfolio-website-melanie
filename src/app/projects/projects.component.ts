import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FetchGithubReposService } from './service/fetch-github-repos.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private fetchGitHubRepos = inject(FetchGithubReposService);

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.fetchGitHubRepos.fetchUserRepos().subscribe({
      next: (data) => {
        console.log('Repositories:', data);
      },
      error: (err) => {
        console.error('Fehler beim Abrufen der Repositories:', err);
      },
    });
  }
}
