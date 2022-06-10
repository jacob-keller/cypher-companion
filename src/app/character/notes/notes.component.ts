/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Note } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { NotesDeleteComponent } from "./delete/delete.component";
import { NotesAddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: "app-character-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  notes: Readonly<Note[]> = [];

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getNotes(): void {
    this.sheet.getNotes().subscribe((notes) => (this.notes = notes));
  }

  ngOnInit(): void {
    this.getNotes();
  }

  drop(event: CdkDragDrop<Readonly<Note>[]>): void {
    this.sheet.moveNote(event);
  }

  delete(i: number): void {
    const dialogRef = this.dialog.open(NotesDeleteComponent, {
      data: { note: this.notes[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.deleteNote(i);
      }
    });
  }

  addNewNote(): void {
    const dialogRef = this.dialog.open(NotesAddEditComponent, {
      data: { note: undefined },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.addNote(result);
      }
    });
  }

  editNote(i: number): void {
    const dialogRef = this.dialog.open(NotesAddEditComponent, {
      data: { note: this.notes[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.replaceNote(i, result);
      }
    });
  }
}
