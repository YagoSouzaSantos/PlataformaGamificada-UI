import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + '/worldswizard/';

@Component({
  selector: 'app-worlds-wizard',
  templateUrl: './worlds-wizard.component.html',
  styleUrls: ['./worlds-wizard.component.css']
})
export class WorldsWizardComponent implements OnInit {
  title = 'Mensagem do mago dos mundos';
  subtitle: any;
  parameterValue: any;
  message: any;
  imagePath: any;

  constructor(public dialogRef: MatDialogRef<WorldsWizardComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: { text: any, parameter: any, title: any, imagePath: any }
  ) { }

  ngOnInit(): void {
    if (this.data.parameter) {
      this.http.get(URL + `${this.data.parameter}`)
        .subscribe(
          (response: any) => {
            this.message = response;
            this.imagePath = this.data.imagePath;
            this.subtitle = this.data.title;
          }
        );
    } else {
            this.message = this.data.text;
            this.imagePath = this.data.imagePath;
            this.subtitle = this.data.title;
    }
  }
}

