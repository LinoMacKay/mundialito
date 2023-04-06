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
  propName = 'rank';

  initialize() {
    this.playersService.getAllPlayers().subscribe((data: any) => {
      this.players = data;
    });
  }
  customsort = (a: any, b: any) => {
    if (a.value[this.propName] === b.value[this.propName]) {
      return 0;
    } else if (a.value[this.propName] === null) {
      return -1;
    } else if (b.value[this.propName] === null) {
      return 1;
    }
    return a.value[this.propName]
      .toString()
      .localeCompare(b.value[this.propName].toString());
  };
}
