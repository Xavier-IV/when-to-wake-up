import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {WhenInputComponent} from './when-input/when-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WhenToSleepComponent} from './when-to-sleep/when-to-sleep.component';
import {TimeService} from './service/time.service';

@NgModule({
  declarations: [
    AppComponent,
    WhenInputComponent,
    WhenToSleepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
