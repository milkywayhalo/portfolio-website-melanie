import { Component, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss',
})
export class PhotographyComponent {
  images = model([]);

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];
}
