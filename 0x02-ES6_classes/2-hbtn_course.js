/* eslint-disable no-underscore-dangle */

import typeChecker from './helpers';

export default class HolbertonCourse {
  constructor(name, length, students) {
    typeChecker('string', name, 'Lame', 'must be a string');
    typeChecker('number', length, 'Length', 'must be a number');
    typeChecker('array', students, 'students', 'must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    typeChecker('string', value, 'Name', 'must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    typeChecker('number', value, 'Length', 'must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    typeChecker('array', value, 'Students', 'must be an array');
    this._students = value;
  }
}
