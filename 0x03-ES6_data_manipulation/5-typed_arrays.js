/**
 *
 * @param {number} len
 * @param {number} pos
 * @param {number} val
 */

const createInt8TypedArray = (len, pos, val) => {
  if (len < 0 || pos > len) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(len);
  const arr = new Int8Array(buffer);

  arr[pos] = val;
  return buffer;
};

export default createInt8TypedArray;
