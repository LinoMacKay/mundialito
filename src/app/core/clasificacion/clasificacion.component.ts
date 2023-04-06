import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.scss'],
})
export class ClasificacionComponent {
  players: Player[] = [];
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.playersService.getAllPlayers().subscribe((data: any) => {
      this.players = data;
    });
  }
}
