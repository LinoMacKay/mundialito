import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from 'src/app/model/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
})
export class CreatePlayerComponent {
  player: Player = new Player(0, '', 0, 0, [], '', '', '');
  isNew = true;

  playerForm = new FormGroup({
    rank: new FormControl(0, Validators.required),
    wins: new FormControl(0, Validators.required),
    loses: new FormControl(0, Validators.required),
    imageUrl: new FormControl(' ', Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<CreatePlayerComponent>,

    private snackBar: MatSnackBar,
    private playerService: PlayersService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  ngOnInit(): void {
    this.player = this.data.player;
    if (this.data != null) {
      this.player = this.data.player;
      this.initializeFormToEdit();
      this.isNew = false;
    } else {
      //    this.candidateForm.reset();
    }
    this.initializeFormToEdit();
  }
  initializeFormToEdit() {
    this.playerForm.patchValue({
      rank: this.player.rank,
      wins: this.player.wins,
      loses: this.player.loses,
      imageUrl: this.player.imageUrl.toString(),
    });
  }
  submitForm() {
    if (this.playerForm.valid) {
      let body = {
        rank: this.playerForm.get('rank')?.value,
        wins: this.playerForm.get('wins')?.value,
        loses: this.playerForm.get('loses')?.value,
        imageUrl: this.playerForm.get('imageUrl')?.value,
        name: this.player.name,
        roles: this.player.roles,
        medal: this.player.medal,
      };
      if (this.isNew) {
      } else {
        this.playerService
          .updateCandidate(body, this.player._id!)
          .subscribe((response: any) => {
            this.dialogRef.close();
            this.snackBar.open('Se ha guardado correctamente', '', {
              duration: 2000,
              panelClass: ['green-snackbar'],
            });
          });
      }
    } else {
      this.snackBar.open('Rellene el formulario correctamente', '', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
    }
  }
}
