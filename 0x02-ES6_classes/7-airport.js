import typeChecker from './helpers';

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    typeChecker('string', value, 'Name', 'must be a string');
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    typeChecker('string', value, 'Code', 'must be a string');
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
