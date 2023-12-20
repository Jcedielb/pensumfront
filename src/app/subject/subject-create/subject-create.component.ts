import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from 'src/app/subject/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  subjectForm!: FormGroup;

  constructor(
    private subjectService: SubjectService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  createSubject(): void {
    if (!this.subjectForm.valid) return;

    const subjectData = this.subjectForm.value;

    this.subjectService.createSubject(subjectData).subscribe({
      next: apiData => {
        this.toastrService.success('Subject created successfully');
        this.router.navigate(['/subjects/list']);
        this.subjectForm.reset();
      },
      error: error => {
        this.toastrService.error(error, 'Error creating subject');
      }
    });
  }

  cancelCreation(): void {
    this.toastrService.warning("Subject creation was canceled", 'Subject creation');
    this.subjectForm.reset();
  }
  ngOnInit() {
    this.subjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      semester: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(5)]],
      credits: ['', [Validators.required]],
    });

  }
  
}
