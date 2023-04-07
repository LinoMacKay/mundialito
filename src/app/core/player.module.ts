import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import { PlayersComponent } from './players/players.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReplaysComponent } from './replays/replays.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlayerComponent } from './players/create-player/create-player.component';

@NgModule({
  declarations: [
    PlayerCardComponent,
    PlayersComponent,
    ClasificacionComponent,
    ReplaysComponent,
    DashboardComponent,
    CreatePlayerComponent,
  ],
  exports: [PlayerCardComponent, PlayersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PlayerModule {}
