import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'species',
    loadChildren: () => import('./pages/species/species.module').then( m => m.SpeciesPageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./pages/species/species.module').then( m => m.SpeciesPageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'species-details',
    loadChildren: () => import('./pages/species-details/species-details.module').then( m => m.SpeciesDetailsPageModule)
  },
  {
    path: 'starships-details',
    loadChildren: () => import('./pages/starships-details/starships-details.module').then( m => m.StarshipsDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
