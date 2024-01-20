import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'console', loadChildren: () => import('./module/console/console.module').then(m => m.ConsoleModule) },

  { path: 'security', loadChildren: () => import('./module/security/security.module').then(m => m.SecurityModule) },

  { path: 'shared', loadChildren: () => import('./module/shared/shared.module').then(m => m.SharedModule) },

  { path: 'starter', loadChildren: () => import('./module/starter/starter.module').then(m => m.StarterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
