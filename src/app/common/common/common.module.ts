import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PlayerModule } from 'src/app/core/player.module';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  exports: [HeaderComponent, HomeComponent],
  imports: [PlayerModule, RouterModule],
})
export class CommonModule {}
