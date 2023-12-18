import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SubjectListComponent],
  declarations: [SubjectListComponent  ]
})
export class SubjectModule { }
