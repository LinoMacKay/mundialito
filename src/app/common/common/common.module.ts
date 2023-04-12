import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PlayerModule } from 'src/app/core/player.module';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  exports: [HeaderComponent, HomeComponent],
  imports: [PlayerModule, RouterModule, MatSidenavModule, MatIconModule],
})
export class CommonModule {}
