/**
 *
 * @param {Array} arr
 * @param {string} city
 * @param {Array} grades
 */

const updateStudentGradeByCity = (arr, city, grades) => {
  const res = arr
    .filter((prev) => city === prev.location)
    .map((val) => {
      const match = grades.find((x) => x.studentId === val.id);
      return { ...val, grade: match ? match.grade : 'N/A' };
    });
  return res;
};

export default updateStudentGradeByCity;
