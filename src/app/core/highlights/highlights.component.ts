import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Replay } from 'src/app/model/replay';
import { PlayersService } from 'src/app/services/players.service';
import { ReplaysService } from 'src/app/services/replays.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
  replays: Replay[] = [];
  constructor(private replaysService: ReplaysService) {}
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.replaysService.getAllReplays(2).subscribe((data: any) => {
      this.replays = data;
    });
  }
}
