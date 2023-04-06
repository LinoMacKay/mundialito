import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { PlayersComponent } from './core/players/players.component';
import { ClasificacionComponent } from './core/clasificacion/clasificacion.component';
import { ReplaysComponent } from './core/replays/replays.component';

const routes: Routes = [
  { path: '', redirectTo: '/clasificacion', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'players', component: PlayersComponent },
  { path: 'clasificacion', component: ClasificacionComponent },
  { path: 'replays', component: ReplaysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
