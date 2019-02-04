import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This will import all the necessary material import files
import * as Material from "@angular/material" 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatListModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatListModule
  ]
})
export class MaterialModule { }
