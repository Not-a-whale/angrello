import {Component} from '@angular/core';

@Component({
  selector: 'board-add-edit-dialog',
  standalone: true,
  imports: [],
  templateUrl: './board-add-edit-dialog.component.html',
  styleUrl: './board-add-edit-dialog.component.scss'
})
export class BoardAddEditDialogComponent {
/*
  dialogRef: MatDialogRef<any> | null = null;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) { }

  openDialog(data: Data): void {
    this.dialogRef = this.dialog.open(data["component"], {
      minWidth: '55vw',
      maxHeight: '90vh',
      data: {
        id: this.route.snapshot.params["id"],
      }
    });
    this.dialogRef.afterClosed().subscribe(_ => this.router.navigate(['/']));
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.openDialog(data);
      if (!this.route.snapshot.params["id"]) {
        this.dialogRef?.close();
      }
    });
  }*/
}
