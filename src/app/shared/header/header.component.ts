import { Component, OnInit } from '@angular/core';
import { HeaderConstants } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = HeaderConstants.TITLE_HEADER;
  subtitle = HeaderConstants.SUBTITLE_HEADER;

  constructor() { }

  ngOnInit(): void {
  }

}
