import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, LoginComponent, SignUpComponent } from './modules';
import { PrivatePathGuard, PublicPathGuard } from './core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicPathGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [PublicPathGuard],
  },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [PrivatePathGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
