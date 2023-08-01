import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-myworkentry',
    templateUrl: './myworkentry.component.html',
    styleUrls: ['./myworkentry.component.scss']
})
export class MyworkentryComponent {

    /**
     * Template for entries
     */
    @Input() entry: {
      name: string,
      skills: string[],
      text: string,
      link: string,
      livelink: string,
      image: string,
      row: string
    } = {
      name: '',
      skills: [],
      text: '',
      link: '',
      livelink: '',
      image: '',
      row: ''
    }
}
