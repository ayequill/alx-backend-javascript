/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
