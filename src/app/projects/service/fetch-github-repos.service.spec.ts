import { TestBed } from '@angular/core/testing';

import { FetchGithubReposService } from './fetch-github-repos.service';

describe('FetchGithubReposService', () => {
  let service: FetchGithubReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGithubReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
