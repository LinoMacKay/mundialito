import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  players: Player[] = [];
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.initialize();
  }
  propName = 'rank';

  initialize() {
    this.playersService.getAllPlayers().subscribe((data: any) => {
      this.players = data;
    });
  }
}
