import { Component, OnInit } from '@angular/core';
import { ApresentacaoConstants } from './apresentacao.constants';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  titleApresent = ApresentacaoConstants.TITLE_CARD_APRESENT;
  
  titleForApresent = ApresentacaoConstants.TITLE_FOR_APRESENT;
  textForApresent = ApresentacaoConstants.TEXT_ABOUT_ME;

  

  constructor() { }

  ngOnInit(): void {
  }

}
