export class Professor {
    id: number;
    code: string;
    name: string;
    department: string;
    email: string;
    image: string;

    constructor(id: number, code: string, name: string, department: string, email: string, image: string) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.email = email;
        this.image = image;
        this.code = code;
    }

}
