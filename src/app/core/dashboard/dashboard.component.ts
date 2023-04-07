import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
