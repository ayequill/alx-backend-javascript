/**
 *
 * @param {Set} set
 * @param {Array} arr
 */

const hasValuesFromArray = (set, arr) => arr.every((x) => set.has(x));

export default hasValuesFromArray;
