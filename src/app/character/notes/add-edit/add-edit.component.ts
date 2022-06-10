/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Note } from "../interface";

@Component({
  selector: "app-character-notes-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class NotesAddEditComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { note: Readonly<Note> },
    public dialogRef: MatDialogRef<NotesAddEditComponent>,
  ) {
    if (data.note) {
      /* The note data is read only. This protects against directly
       * modifying the contents outside of the sheet service.
       *
       * Instead, we copy the title, contents, and date out to allow our
       * components to edit. On dialog close, the note data will be returned
       * as a new note which will overwrite the existing data.
       */
      this.title = data.note.title;
      this.contents = data.note.contents;
      this.created = data.note.created;
    }
  }

  ngOnInit(): void {}

  title: string = "";

  contents: string = "";

  created: Date = new Date();

  edited: Date = this.created;

  noteTitleRequired = new FormControl("", [Validators.required]);

  saveAndClose(): void {
    /* don't save if there is no note title */
    if (this.noteTitleRequired.invalid) {
      return;
    }

    let note = new Note(this.title, this.contents, this.created, this.edited);

    /* close the dialog and pass back the new note contents */
    this.dialogRef.close(note);
  }

  getTitleErrorMessage() {
    if (this.noteTitleRequired.hasError("required")) {
      return "A note title is required";
    }

    return "";
  }
}
