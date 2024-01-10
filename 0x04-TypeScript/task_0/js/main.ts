interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'firstName',
  lastName: 'last',
  age: 2,
  location: 'earth',
};

const student2: Student = {
  firstName: 'firstName',
  lastName: 'last',
  age: 2,
  location: 'earth',
};

const studentList: Student[] = [student1, student2];

console.table(studentList);
