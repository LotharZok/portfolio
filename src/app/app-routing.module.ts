import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
    { path: '', component: ContentComponent },  // beim root-Pfad wird diese Component geladen
    { path: 'imprint', component: ImprintComponent },  // beim legalnotice-Pfad wird diese Component geladen
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
