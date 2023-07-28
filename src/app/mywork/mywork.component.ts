import { Component } from '@angular/core';

@Component({
    selector: 'app-mywork',
    templateUrl: './mywork.component.html',
    styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent {


    works: {
        name: string,
        skills: string[],
        text: string,
        link: string,
        image: string,
        row: string
    }[] = [
        {
            'name': 'Join',
            'skills': ['JavaScript', 'HTML', 'CSS'],
            'text': 'A Task Manager based on the Kanban System. Create and organise tasks using drag and drop functions, assign users and categories. This was a team project.',
            'link': 'https://github.com/LotharZok/join-project',
            'image': 'assets/img/screenshots/join.png',
            'row': 'odd'
        },
        {
            'name': 'El Pollo Loco',
            'skills': ['JavaScript', 'HTML', 'CSS'],
            'text': 'A jump and run (and throw) game using object orientation. Help Pepe finding coins und salsa bottles to fight against the crazy hen.',
            'link': 'https://github.com/LotharZok/el-pollo-loco',
            'image': 'assets/img/screenshots/el-pollo-loco.png',
            'row': 'even'
        },
        {
            'name': 'Pokémon Dex',
            'skills': ['JavaScript', 'HTML', 'CSS', 'Rest Api'],
            'text': 'Using the PokéAPI this represents a simple library of all creatures of Pokemon. By clicking on a cart it shows further information. Works in german, english, french, spanish and italian.',
            'link': 'https://github.com/LotharZok/pokedex',
            'image': 'assets/img/screenshots/pokemon-dex.png',
            'row': 'odd'
        }
    ]
}
