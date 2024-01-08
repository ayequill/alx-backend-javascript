/**
 *
 * @param {Array} arr
 * @returns {number}
 */

const getStudentIdsSum = (arr) => {
  const studentSum = arr.reduce((acc, cur) => acc + cur.id, 0);
  return studentSum;
};

export default getStudentIdsSum;
