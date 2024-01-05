/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import Currency from './3-currency';

/**
 * type Currency
 * @typedef {import('./3-currency').default} Currency
 *
 */

/**
 * Class Pricing
 * @class
 * @public
 * @export
 * @param {number} amount
 * @param {Currency} currency
 *
 */
export default class Pricing {
  /**
   * @param {Currency} currency
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  /**
   * @returns {Currency}
   */
  get currency() {
    return this._currency;
  }

  /**
   * @param {Currency} cur
   */
  set currency(cur) {
    this._currency = cur;
  }

  /**
   * @returns {string}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   *
   * @param {number} amount
   * @param {number} rate
   */

  static convertPrice(amount, rate) {
    return amount * rate;
  }
}
