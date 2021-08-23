import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, CanActivate } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';
import { PreloadAllModules } from '@angular/router';
const fallbackRoute: Route = {
  path: '**', component: NotFoundComponent
};

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
      {
        path: 'utilities',
        canActivate:[AuthGuard],
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  //fallbackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules,
  })],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
