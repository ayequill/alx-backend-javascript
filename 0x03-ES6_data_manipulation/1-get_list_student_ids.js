/**
 *
 * @param {Array} arr
 * @returns {Array}
 */

const getListStudentIds = (arr) => {
  const res = Array.isArray(arr) ? arr.map((x) => x.id) : [];
  return res;
};

export default getListStudentIds;
