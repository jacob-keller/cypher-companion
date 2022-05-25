/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
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
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

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
import { SkillsAddComponent } from "./character/skills/add/add.component";

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
    SkillsAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
