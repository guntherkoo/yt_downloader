// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;

    constructor(
    	public firstName: string,
    	public middleInitial: string,
    	public lastName: string
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

function Greeting(person: Person) {
	return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

export {
    Greeting,
    Student
}