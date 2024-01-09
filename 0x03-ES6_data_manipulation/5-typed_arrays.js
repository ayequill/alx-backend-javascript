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
  const view = new DataView(buffer);

  view.setInt8(pos, val);
  return view;
};

export default createInt8TypedArray;
