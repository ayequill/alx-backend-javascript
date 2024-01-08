const getListStudentIds = (arr) => {
  return Array.isArray(arr) ? arr.map((x) => x.id) : [];
};

export default getListStudentIds;
