import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'',redirectTo:'starter',pathMatch:'full'},
  { path: 'console', loadChildren: () => import('./module/console/console.module').then(m => m.ConsoleModule) },
  { path: 'security', loadChildren: () => import('./module/security/security.module').then(m => m.SecurityModule) },
  { path: 'shared', loadChildren: () => import('./module/shared/shared.module').then(m => m.SharedModule) },
  { path: 'starter', loadChildren: () => import('./module/starter/starter.module').then(m => m.StarterModule) },
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
