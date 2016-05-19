export class Person {

    /**
     * attributes
     */
    public name: string;
    public age: number;

    /**
     * constructor
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * methods
     */
    public greet();
    public greet(message: string);
    public greet(message?: string) {
        if (message) {
            console.log(message);
        } else {
            console.log("Hello World!");
        }
    }
}
