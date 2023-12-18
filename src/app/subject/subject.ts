export class Subject {
    id: number;
    name: string;
    code: string;
    description: string;
    credits: number;
    semester: number;
    image: string;
    prerequisites: Array<Subject> = [];

    constructor(id: number, name: string, code: string, description: string, credits: number, semester: number, image: string) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.credits = credits;
        this.semester = semester;
        this.image = image;
    }

}
