import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const formsMaterial = [
  FormsModule, 
  ReactiveFormsModule, 
  MatIconModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatCardModule, 
  MatDividerModule
]

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [
    formsMaterial
  ]

})
export class FormsMaterialModule { }
