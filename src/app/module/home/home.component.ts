import { Avaliacao } from './model/avaliacao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeConstants } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = HomeConstants.TITLE_CARD_FORM;

  titleCard = HomeConstants.TITLE_CARD;
  titleForFirstCard = HomeConstants.TITLE_CARD_RESUME;
  textForFirstCard = HomeConstants.TEXT_HISTORY_RESUME;
  titleMainCard = HomeConstants.TITLE_MAIN_CARD;
  textForMainCard = HomeConstants. TEXT_MAIN_CARD;

  form!: FormGroup;

  showForm: boolean = false;

  hideBtn: boolean = false;

  avaliacaoList: any[] = [];

  constructor(private fb: FormBuilder) {
  
   }

  ngOnInit(): void {
    this.initForm();
    this.showForm = false;
    this.hideBtn = false;
  }

  // Iniciando Formulario
  initForm() {
    this.form = this.fb.group({
      resumo: [null], 
      avaliacao: [null]
    });
  }

  // Funcao para mostrar formulario
  openForm() {
    this.showForm = true;
  }


  // Enviando avaliaçao, adicionando a lista
  sendAvaliacao() {
    const data = new Avaliacao();
    data.resumo = this.form.get('resumo')!.value
    data.avaliacao = this.form.get('avaliacao')!.value

    this.avaliacaoList.push(data);
    

    setTimeout(() => {
      this.showForm = false;
      this.resetForm();
    }, 500)
  }


  // Limpar inputs apos envio
  resetForm(): void {
    this.form.get('resumo')!.setValue('');
    this.form.get('avaliacao')!.setValue('');
  }

  showTotalString(): void {
    this.textForFirstCard = this.textForFirstCard.concat(HomeConstants.TEXT_HISTORY_TOTAL);
    this.hideBtn = true;
  }

}
