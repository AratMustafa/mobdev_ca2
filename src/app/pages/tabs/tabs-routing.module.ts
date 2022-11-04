import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () => import('../species/species.module').then( m => m.SpeciesPageModule)
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () => import('../starships/starships.module').then( m => m.StarshipsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
