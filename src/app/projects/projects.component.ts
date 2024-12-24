import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FetchGithubReposService } from './service/fetch-github-repos.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  repoImages: string[] = [];
  repos$!: Observable<any[]>; // Observable für Repositories
  private fetchGitHubRepos = inject(FetchGithubReposService);

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.repos$ = this.fetchGitHubRepos.fetchUserRepos();
  }
}
