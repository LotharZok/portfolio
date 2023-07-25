import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-myworkentry',
    templateUrl: './myworkentry.component.html',
    styleUrls: ['./myworkentry.component.scss']
})
export class MyworkentryComponent {

    @Input() entry: {
      name: string,
      skills: string[],
      text: string,
      link: string,
      image: string,
      row: string
    } = {
      name: '',
      skills: [],
      text: '',
      link: '',
      image: '',
      row: ''
    }
}
