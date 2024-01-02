/**
 *
 * @param {string} departmentName
 * @param {string[]} employees
 * @returns {object}
 */

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
