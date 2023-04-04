import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'movies', component: MoviesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
