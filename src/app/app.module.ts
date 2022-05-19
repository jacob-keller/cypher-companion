/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MainmenuComponent } from "./mainmenu/mainmenu.component";
import { SummaryComponent } from "./character/summary/summary.component";
import { SkillsComponent } from "./character/skills/skills.component";
import { AbilitiesComponent } from "./character/abilities/abilities.component";
import { CyphersComponent } from "./character/cyphers/cyphers.component";
import { EquipmentComponent } from "./character/equipment/equipment.component";
import { BackgroundComponent } from "./character/background/background.component";
import { NotesComponent } from "./character/notes/notes.component";

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    SummaryComponent,
    SkillsComponent,
    AbilitiesComponent,
    CyphersComponent,
    EquipmentComponent,
    BackgroundComponent,
    NotesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
