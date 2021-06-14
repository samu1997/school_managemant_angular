import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverallComponent } from './overall/overall.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/dashboard/overall-stats', pathMatch: 'full' },
      { path: 'overall-stats', component: OverallComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
