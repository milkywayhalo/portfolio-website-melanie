import { TestBed } from '@angular/core/testing';

import { FetchGitHubImagesService } from './fetch-image-mapping.service';

describe('FetchGitHubImagesService', () => {
  let service: FetchGitHubImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGitHubImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
