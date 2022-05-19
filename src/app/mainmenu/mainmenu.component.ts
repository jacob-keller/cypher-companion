import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  // Property controlling whether the menu is collapsed. Default it to true
  // so that the menu does not appear by default on a small screen.
  public isMenuCollapsed = true;

  links = [
    { title: 'Summary', route: 'summary' },
    { title: 'Skills', route: 'skills' },
    { title: 'Abilities', route: 'abilities' },
    { title: 'Cyphers', route: 'cyphers' },
    { title: 'Equipment', route: 'equipment' },
    { title: 'Background', route: 'background' },
    { title: 'Notes', route: 'notes' },
  ];

  @ViewChild(NgbNav, {static: true})
  ngbNav!: NgbNav;

  constructor(public router: Router) { }

  ngOnInit(): void {
    const urlPath = this.router.url;
    this.ngbNav.select(urlPath);
  }
}
