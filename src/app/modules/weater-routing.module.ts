import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'welcome',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'welcome',
      //   component: WelcomeContainer,
      //   pathMatch: 'full',
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaterRoutingModule {}
