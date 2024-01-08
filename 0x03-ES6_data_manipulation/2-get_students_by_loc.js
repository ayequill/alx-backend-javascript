/**
 *
 * @param {Array} arr
 * @param {string} city
 * @returns {Array}
 */

const getStudentsByLocation = (arr, city) => {
  const res = arr.filter((student) => student.location === city);
  return res;
};

export default getStudentsByLocation;
