import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './character/summary/summary.component';
import { SkillsComponent } from './character/skills/skills.component';
import { AbilitiesComponent } from './character/abilities/abilities.component';
import { CyphersComponent } from './character/cyphers/cyphers.component';
import { EquipmentComponent } from './character/equipment/equipment.component';
import { BackgroundComponent } from './character/background/background.component';
import { NotesComponent } from './character/notes/notes.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'abilities', component: AbilitiesComponent },
  { path: 'cyphers', component: CyphersComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'notes', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
