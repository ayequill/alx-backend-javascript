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
    return 'Getting to director tasks';
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
