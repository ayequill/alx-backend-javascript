export default class Building {
  /**
   *
   * @param {number} sqft
   */
  constructor(sqft) {
    const prop = Building.prototype.evacuationWarningMessage;
    const notTarget = new.target !== Building;
    const isSameProp = this.evacuationWarningMessage === prop;

    if (notTarget && !prop && isSameProp) {
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
