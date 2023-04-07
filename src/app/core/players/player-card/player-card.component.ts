import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { CreatePlayerComponent } from '../create-player/create-player.component';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input() player: Player = new Player(
    1,
    'Apellido',
    6,
    7,
    [''],
    'testingemail@test.com'
  );
  @Output() resultEmitter = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    console.log(this.router.url);
    this.initialize();
  }

  initialize() {}

  openEdit() {
    if (this.router.url.includes('dashboard')) {
      const dialogRef = this.dialog
        .open(CreatePlayerComponent, {
          width: '50vw',
          height: '80vh',
          data: {
            personToEdit: this.player,
          },
        })
        .afterClosed()
        .subscribe((data: any) => {
          this.resultEmitter.emit();
        });
    }
  }
}
