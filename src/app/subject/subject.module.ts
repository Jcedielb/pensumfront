import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [SubjectListComponent, SubjectDetailComponent, SubjectCreateComponent, ReactiveFormsModule, FormsModule],
  declarations: [SubjectListComponent, SubjectDetailComponent, SubjectCreateComponent]
})
export class SubjectModule { }
