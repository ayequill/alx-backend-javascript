type Custom = string | boolean | number | undefined;
interface Name {
  readonly firstName: string;
  readonly lastName: string;
}

interface Teacher extends Name {
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: Custom;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface {
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;
  constructor({ firstName, lastName }: Name) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Working from home';
  }

  displayName() {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: 'Nick', lastName: 'Siaw' });
console.log(student.displayName());
console.log(student.workOnHomework());
