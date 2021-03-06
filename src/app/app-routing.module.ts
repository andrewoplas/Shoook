import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@modules/admin/login/login.component';
import { AdminComponent } from '@modules/admin/admin/admin.component';
import { AdminGuard } from '@core/authentication/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: './modules/user/landing/landing.module#LandingModule' },
  { path: 'invite', loadChildren: './modules/user/invite/invite.module#InviteModule' },
  { path: 'search', loadChildren: './modules/user/search/search.module#SearchModule' },
  { path: 'checkout', loadChildren: './modules/user/checkout/checkout.module#CheckoutModule' },
  { path: 'payment', loadChildren: './modules/user/payment/payment.module#PaymentModule' },
  { path: 'vendor', loadChildren: './modules/vendor/vendor.module#VendorModule'},
  { path: 'admin', component: AdminComponent, loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [AdminGuard]},
  { path: 'admin/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard
  ]
})
export class AppRoutingModule { }
