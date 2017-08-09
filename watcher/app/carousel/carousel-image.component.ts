import { Component, Input } from '@angular/core';
import { Carousel } from './carousel';
@Component({
  moduleId: module.id,
  selector: 'tv-carousel-image',
  templateUrl: 'carousel-image.template.html'
})
export class CarouselImageComponent {
  @Input() slide: Carousel;
  constructor() {}

  ngOnInit() {
    
  }
}