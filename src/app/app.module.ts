/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SummaryComponent } from "./character/summary/summary.component";

import { SkillsComponent } from "./character/skills/skills.component";
import { SkillsDeleteComponent } from "./character/skills/delete/delete.component";
import { SkillsAddEditComponent } from "./character/skills/add-edit/add-edit.component";

import { AbilitiesComponent } from "./character/abilities/abilities.component";
import { AbilitiesDeleteComponent } from "./character/abilities/delete/delete.component";
import { AbilitiesAddEditComponent } from "./character/abilities/add-edit/add-edit.component";

import { CyphersComponent } from "./character/cyphers/cyphers.component";
import { CyphersDeleteComponent } from "./character/cyphers/delete/delete.component";
import { CyphersAddEditComponent } from "./character/cyphers/add-edit/add-edit.component";

import { EquipmentComponent } from "./character/equipment/equipment.component";
import { EquipmentDeleteComponent } from "./character/equipment/delete/delete.component";
import { EquipmentAddEditComponent } from "./character/equipment/add-edit/add-edit.component";
import { EditArmorComponent } from "./character/equipment/edit-armor/edit-armor.component";
import { EditMoneyComponent } from "./character/equipment/edit-money/edit-money.component";

import { NotesComponent } from "./character/notes/notes.component";
import { NotesDeleteComponent } from "./character/notes/delete/delete.component";
import { NotesAddEditComponent } from "./character/notes/add-edit/add-edit.component";
import { TierInfoComponent } from "./character/summary/tier-info/tier-info.component";
import { AttributePoolComponent } from "./character/summary/attribute-pool/attribute-pool.component";
import { RecoveryRollsComponent } from "./character/summary/recovery-rolls/recovery-rolls.component";
import { DamageTrackComponent } from "./character/summary/damage-track/damage-track.component";
import { InfoImpairedComponent } from "./character/summary/damage-track/info-impaired/info-impaired.component";
import { InfoDebilitatedComponent } from "./character/summary/damage-track/info-debilitated/info-debilitated.component";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SkillsComponent,
    SkillsDeleteComponent,
    SkillsAddEditComponent,
    AbilitiesComponent,
    AbilitiesDeleteComponent,
    AbilitiesAddEditComponent,
    CyphersComponent,
    CyphersDeleteComponent,
    CyphersAddEditComponent,
    EquipmentComponent,
    EquipmentDeleteComponent,
    EquipmentAddEditComponent,
    EditArmorComponent,
    EditMoneyComponent,
    NotesComponent,
    NotesDeleteComponent,
    NotesAddEditComponent,
    TierInfoComponent,
    AttributePoolComponent,
    RecoveryRollsComponent,
    DamageTrackComponent,
    InfoImpairedComponent,
    InfoDebilitatedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
