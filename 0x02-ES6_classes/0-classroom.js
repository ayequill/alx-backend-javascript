export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentSize() {
    return this._maxStudentsSize;
  }

  set maxStudentSize(value) {
    this._maxStudentsSize = value;
  }
}
