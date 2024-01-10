interface Base {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends Base {
  workDirectorTasks(): string;
}

interface TeacherInterface extends Base {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot Work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface CreateEmployee {
  (salary: string | number): Director | Teacher;
}

const createEmployee: CreateEmployee = (salary) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const isDirector = (employee: Director | Teacher): boolean =>
  employee instanceof Director;


const executeWork = (employee: Director | Teacher): void => {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks()); 
  }
};

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

const teachClass = (todaysClass: Subjects) => {
  if (todaysClass === 'Math') {
    return 'Teaching Math';
  }
  if (todaysClass === 'History') {
    return 'Teaching History';
  }
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
