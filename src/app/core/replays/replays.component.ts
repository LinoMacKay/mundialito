import { Component } from '@angular/core';
import { Replay } from 'src/app/model/replay';
import { ReplaysService } from 'src/app/services/replays.service';

@Component({
  selector: 'app-replays',
  templateUrl: './replays.component.html',
  styleUrls: ['./replays.component.scss'],
})
export class ReplaysComponent {
  replays: Replay[] = [];
  constructor(private replaysService: ReplaysService) {}
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.replaysService.getAllReplays().subscribe((data: any) => {
      this.replays = data;
    });
  }
}
