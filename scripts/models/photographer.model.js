/**
 * @class Photographer Model
 */
export class Photographer {
  /**
   * @constructs Photographer
   * @param {Object} photographerData Data of a Photographer
   * @param {string} photographerData.name
   * @param {number} photographerData.id
   * @param {string} photographerData.city
   * @param {string} photographerData.country
   * @param {string} photographerData.tagline
   * @param {number} photographerData.price
   * @param {string} photographerData.portrait
   */
  constructor(photographerData) {
    this._name = photographerData.name;
    this._id = photographerData.id;
    this._city = photographerData.city;
    this._country = photographerData.country;
    this._tagline = photographerData.tagline;
    this._price = photographerData.price;
    this._portrait = photographerData.portrait;
    this._path = "photographer.html";
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get portrait() {
    return `assets/photographers/${this._portrait}`;
  }

  get photographerUrl() {
    return `${this._path}?id=${this._id}`;
  }
}
