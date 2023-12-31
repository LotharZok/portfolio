import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TogetherComponent } from './together/together.component';
import { SkillsComponent } from './skills/skills.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { MyworkentryComponent } from './myworkentry/myworkentry.component';
import { FormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// inport { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    TogetherComponent,
    SkillsComponent,
    MyworkComponent,
    ContactComponent,
    ContentComponent,
    MyworkentryComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    // ReactiveFormsModule
    // ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
