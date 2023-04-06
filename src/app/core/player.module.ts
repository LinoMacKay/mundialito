import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayersComponent } from './players/players.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayerCardComponent, PlayersComponent, ClasificacionComponent],
  exports: [PlayerCardComponent, PlayersComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class PlayerModule {}
