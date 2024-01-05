export default class Building {
  /**
   *
   * @param {number} sqft
   */
  constructor(sqft) {
    const notTarget = new.target !== Building;
    const hasProp = !Building.prototype.evacuationWarningMessage;

    if (notTarget && hasProp) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
