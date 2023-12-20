import { Grade } from "../grade/grade";

export class Subject {
    id: number;
    name: string;
    code: string;
    description: string;
    credits: number;
    semester: number;
    image: string;
    viewed: boolean;
    department: string;
    
    constructor(id: number, name: string, code: string, description: string, credits: number, semester: number, image: string, department: string, viewed: boolean) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.credits = credits;
        this.semester = semester;
        this.image = image;
        this.department = department;
        this.viewed = viewed;
    }

}
