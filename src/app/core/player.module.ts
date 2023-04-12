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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreatePlayerComponent } from './players/create-player/create-player.component';
import { ReplayCardComponent } from './replays/replay-card/replay-card.component';
import { HighlightsComponent } from './highlights/highlights.component';

@NgModule({
  declarations: [
    PlayerCardComponent,
    PlayersComponent,
    ClasificacionComponent,
    ReplaysComponent,
    DashboardComponent,
    CreatePlayerComponent,
    ReplayCardComponent,
    HighlightsComponent,
  ],
  exports: [PlayerCardComponent, PlayersComponent],
  imports: [
    MatSnackBarModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PlayerModule {}
