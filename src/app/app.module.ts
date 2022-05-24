/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { OverlayModule } from "@angular/cdk/overlay";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SummaryComponent } from "./character/summary/summary.component";
import { SkillsComponent } from "./character/skills/skills.component";
import { AbilitiesComponent } from "./character/abilities/abilities.component";
import { CyphersComponent } from "./character/cyphers/cyphers.component";
import { EquipmentComponent } from "./character/equipment/equipment.component";
import { BackgroundComponent } from "./character/background/background.component";
import { NotesComponent } from "./character/notes/notes.component";
import { SkillsDeleteComponent } from "./character/skills/delete/delete.component";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SkillsComponent,
    AbilitiesComponent,
    CyphersComponent,
    EquipmentComponent,
    BackgroundComponent,
    NotesComponent,
    SkillsDeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    OverlayModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
