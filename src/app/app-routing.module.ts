import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TablesComponent } from './tables/tables.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { BorderComponent } from './utilities/border/border.component';
import { ColorComponent } from './utilities/color/color.component';
import { OtherComponent } from './utilities/other/other.component';
import { LoginComponent } from './login/login.component';

const fallbackRoute: Route = {
  path: '**', component: NotFoundComponent
};

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
      {
        path: 'utilities', // 無元件路由 (僅包含子路由)
        children: [
          { path: 'color', component: ColorComponent },
          { path: 'animation', component: AnimationComponent },
          { path: 'border', component: BorderComponent },
          { path: 'other', component: OtherComponent },
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
