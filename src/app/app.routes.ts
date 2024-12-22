import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotographyComponent } from './photography/photography.component';
import { CvComponent } from './cv/cv.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: '**', redirectTo: 'home' },
];
