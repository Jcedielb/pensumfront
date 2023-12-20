export class Grade {
    id: number;
    name: string;
    grade: number;
    percentage: number;

    constructor(id: number, name: string, grade: number, percentage: number) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.percentage = percentage;
    }

}
