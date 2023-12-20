
import { Grade } from '../grade/grade';
import { Professor } from '../professor/professor';
import { Subject } from './subject';

export class SubjectDetail extends Subject {
  prerequisites: Array<Subject> = [];
  grades: Array<Grade> = [];
  professors: Array<Professor> = [];

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    code: string,
    credits: number,
    semester: number,
    department: string,
    viewed: boolean,
    prerequisites: Array<Subject>,
    grades: Array<Grade>,
    professors: Array<Professor>,
  ) {
    super(id, name, code, description, credits, semester, image, department, viewed);
    this.prerequisites = prerequisites;
    this.grades = grades;
    this.professors = professors;
  }
}