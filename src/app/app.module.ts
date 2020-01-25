import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './components/payments/payments.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_CvvwyK5Yn3rlpVKUyrmIEYui00b0LG0jFx'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
