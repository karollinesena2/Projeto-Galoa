import { SharedModule } from './../../shared/shared.module';
import { ApresentacaoComponent } from './apresentacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApresentacaoRoutingModule } from './apresentacao-routing.module';


@NgModule({
  declarations: [
    ApresentacaoComponent
  ],
  imports: [
    CommonModule,
    ApresentacaoRoutingModule,
    SharedModule
  ]
})
export class ApresentacaoModule { }
