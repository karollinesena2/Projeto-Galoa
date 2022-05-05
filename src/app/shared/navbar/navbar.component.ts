import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarConstants } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = NavbarConstants.TITLE_NAVBAR;

  menu = NavbarConstants.MENU_OPTION_NAVBAR;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOption(link: string) {
    console.log('entrou')
    this.router.navigate([link]);
  }

}
