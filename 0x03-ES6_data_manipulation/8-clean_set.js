/**
 *
 * @param {Set} set
 * @param {string} startStr
 */

export default function cleanSet(set, startStr) {
  const check = !startStr || !set || !(set instanceof Set);
  const res = [...set]
    .filter((val) => val.startsWith(startStr))
    .map((str) => str.slice(startStr.length))
    .join('-');
  return check ? '' : res;
}
