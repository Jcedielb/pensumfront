import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Array<Subject> = [];
  organizedSubjects: { [key: number]: Subject[] } = {}; // Organized subjects by semester

  constructor(private subjectService: SubjectService) { }

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
      this.organizeSubjectsBySemester();
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

  ngOnInit() {
    this.getSubjects();
  }

}
