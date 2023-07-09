import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kennenlernbestaetigung',
  templateUrl: './kennenlernbestaetigung.component.html',
  styleUrls: ['./kennenlernbestaetigung.component.css'],
})
export class KennenlernbestaetigungComponent {
  constructor(private router: Router, private dialogRef: MatDialogRef<KennenlernbestaetigungComponent>) {}

  goToHome() {
    this.router.navigate(['/home']);
    this.dialogRef.close(); 
  }
}
