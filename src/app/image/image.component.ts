import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-component',
  template: '<img src="{{source}}">',
  styleUrls: ['./image.component.css']
})

export class ImageComponent {
  @Input() source: string = '';
}