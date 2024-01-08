/**
 *
 * @param {Array} arr
 * @param {string} city
 * @returns {Array}
 */

const getStudentsByLocation = (arr, city) => {
  return arr.filter((student) => student.location === city);
};

export default getStudentsByLocation;
