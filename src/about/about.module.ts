import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ":name", component: AboutComponent },
      { path: "contact", component: ContactComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBWnHrrfLInSLSGSEuCQ5372tbhYM6hCWk"
    })
  ],
  declarations: [AboutComponent, ContactComponent]
})
export class AboutModule {
 
 }
