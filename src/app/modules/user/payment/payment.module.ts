import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
