import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FetchGithubReposService } from './service/fetch-github-repos.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FetchGitHubImagesService } from './service/fetch-image-mapping.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  repos$!: Observable<any[]>;
  imageMapping$!: Observable<{ [key: string]: string }>; // Mapping aus JSON
  private fetchGitHubRepos = inject(FetchGithubReposService);
  private fetchProjectImages = inject(FetchGitHubImagesService);

  ngOnInit(): void {
    // this.getImages();
    this.getRepos();
  }

  getRepos(): void {
    this.repos$ = this.fetchGitHubRepos.fetchUserRepos();
  }

  /* getImages(): void {
    this.imageMapping$ = this.fetchProjectImages.getImageMapping();
  } */
}
