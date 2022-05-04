import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {

  @Input() resumoCard!: string;
  @Input() contentCard!: string;

  countLikes: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.countLikes = 0;
  }

  likeCount(): void {
    this.countLikes++;
  }

}
