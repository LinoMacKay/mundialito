import { Component, Input } from '@angular/core';
import { Replay } from 'src/app/model/replay';

@Component({
  selector: 'app-replay-card',
  templateUrl: './replay-card.component.html',
  styleUrls: ['./replay-card.component.scss'],
})
export class ReplayCardComponent {
  @Input() replay: Replay = new Replay('', '', '', '');
}
