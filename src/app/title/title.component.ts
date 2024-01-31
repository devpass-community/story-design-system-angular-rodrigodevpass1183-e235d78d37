import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-component',
  template: '<h1>Hello, {{who}}!</h1>',
  styleUrls: ['./title.component.css']
})

export class TitleComponent {
  @Input() who: string = 'New Rizon';
}