import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Property controlling whether the menu is collapsed. Default it to true
  // so that the menu does not appear by default on a small screen.
  public isMenuCollapsed = true;

  // Controls currently active menu item
  public active = 1;
}
