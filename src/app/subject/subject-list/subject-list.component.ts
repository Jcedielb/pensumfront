import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { SubjectDetail } from '../subject-detail';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  selected: boolean = false;
  subjects: Array<SubjectDetail> = [];
  selectedSubject!: SubjectDetail;
  organizedSubjects: { [key: number]: SubjectDetail[] } = {}; // Organized subjects by semester
  semesterCredits: { [key: number]: number } = {}; // Total credits by semester

  constructor(private subjectService: SubjectService) { }

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
      this.organizeSubjectsBySemester();
      this.calculateSemesterCredits();
    });
  }

  organizeSubjectsBySemester(): void {
    this.subjects.forEach((subject) => {
      if (!this.organizedSubjects[subject.semester]) {
        this.organizedSubjects[subject.semester] = [];
      }
      this.organizedSubjects[subject.semester].push(subject);
    });
  }

  calculateSemesterCredits(): void {
    Object.keys(this.organizedSubjects).forEach((semesterKey) => {
      const semesterNumber = parseInt(semesterKey, 10);
      const semesterSubjects = this.organizedSubjects[semesterNumber];
      const totalCredits = semesterSubjects.reduce((sum, subject) => sum + subject.credits, 0);
      this.semesterCredits[semesterNumber] = totalCredits;
    });
  }

  onSelected(subject: SubjectDetail): void {
    this.selected = true;
    this.selectedSubject = subject;
  }

  ngOnInit() {
    this.getSubjects();
  }

}
