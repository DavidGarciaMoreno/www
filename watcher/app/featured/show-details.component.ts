import { Component, Input } from '@angular/core';
import { Featured } from './featured';

@Component({
  moduleId: module.id,
  selector: 'tv-show-details',
  templateUrl: 'show-details.template.html',
  styleUrls: ['styles.css']
})
export class ShowDetailsComponent {
  @Input() show: Featured;
}