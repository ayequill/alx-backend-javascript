/**
 *
 * @param {Set} set
 * @param {string} startStr
 * @returns {string}
 */

export default function cleanSet(set, startStr) {
  if (!startStr || !set || !(set instanceof Set)) {
    return '';
  }
  return [...set]
    .filter((val) => val.startsWith(startStr))
    .map((str) => str.slice(startStr.length))
    .join('-');
}
