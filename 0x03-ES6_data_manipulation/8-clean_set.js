/**
 *
 * @param {Set} set
 * @param {string} startStr
 * @returns {string}
 */

export default function cleanSet(set, startStr) {
  const isNot = !startStr || !set || !(set instanceof Set)
                || typeof startStr !== 'string';

  return isNot ? '' : [...set]
    .filter((val) => val.startsWith(startStr))
    .map((str) => str.slice(startStr.length))
    .join('-');
}
