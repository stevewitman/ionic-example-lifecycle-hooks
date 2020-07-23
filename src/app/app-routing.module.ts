import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    children: [
      {
        path: '',
        loadChildren: () => import('./articles/articles.module').then(
          m => m.ArticlesPageModule
        )
      },
      {
        path: ':articleId',
        loadChildren: () => import('./articles/article/article.module').then(
          m => m.ArticlePageModule
        )
      }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
