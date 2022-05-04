import { MiniCardComponent } from './mini-card/mini-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardComponent,
    MiniCardComponent
  ],
  exports : [
    HeaderComponent,
    NavbarComponent,
    CardComponent,
    MiniCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
