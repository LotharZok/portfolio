import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @ViewChild('menuMobileOverlay') menuMobileOverlay!: ElementRef;


    /**
     * Opens the overlay menu
     */
    openMenu() {
        let menuMobileOverlay = this.menuMobileOverlay.nativeElement;
        menuMobileOverlay.classList.remove('d-none');
    }


    /**
     * Closes the overlay menu
     */
    closeMenu() {
        let menuMobileOverlay = this.menuMobileOverlay.nativeElement;
        menuMobileOverlay.classList.add('d-none');
    }
}
