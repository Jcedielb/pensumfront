import { Component, Input, OnInit } from '@angular/core';
import { SubjectDetail } from '../subject-detail';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  subjectId!: string;
  @Input() subjectDetail!: SubjectDetail;

  

  constructor() { }

  ngOnInit() {
    console.log(this.subjectDetail);
  }

}
