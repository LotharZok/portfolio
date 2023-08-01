import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @ViewChild('menuMobileOverlay') menuMobileOverlay!: ElementRef;

    openMenu() {
        console.log('openMenu gestartet');

        let menuMobileOverlay = this.menuMobileOverlay.nativeElement;
        menuMobileOverlay.classList.remove('d-none');
    }

    closeMenu() {
        console.log('closeMenu gestartet');

        let menuMobileOverlay = this.menuMobileOverlay.nativeElement;
        menuMobileOverlay.classList.add('d-none');
    }
}
