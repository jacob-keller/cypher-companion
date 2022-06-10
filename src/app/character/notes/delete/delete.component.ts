/** @format */

import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Note } from "../interface";

@Component({
  selector: "app-character-notes-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class NotesDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { note: Readonly<Note> },
    public dialogRef: MatDialogRef<NotesDeleteComponent>,
  ) {}

  ngOnInit(): void {}
}
