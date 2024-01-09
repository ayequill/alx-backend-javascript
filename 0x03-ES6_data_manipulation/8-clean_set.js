/**
 *
 * @param {Set} set
 * @param {string} startStr
 */

const cleanSet = (set, startStr) => {
  const res = [...set]
    .filter((val) => val.startsWith(startStr))
    .map((str) => str.slice(startStr.length))
    .join('-');
  return startStr ? res : '';
};

export default cleanSet;
