import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'register-screen',
        loadChildren: () => import('../flutter_style/screen/register-screen/register-screen.module').then( m => m.RegisterScreenPageModule)
      },
      {
        path: 'home-screen',
        loadChildren: () => import('../flutter_style/screen/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
      },
      {
        path: 'login-screen',
        loadChildren: () => import('../flutter_style/screen/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
