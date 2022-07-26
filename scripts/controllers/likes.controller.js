/**
 * @property {Object} media
 */
export class NumberOfLikes {
  constructor(media, dom) {
    this.currentLikes = media.likes;
    this.dom = dom;
    this.count = 0;
  }

  /**
   * Adding an eventListener to like__container
   * @param {HTMLElement} dom
   */
  addEvent(dom) {
    dom
      .querySelector(".like__container")
      .addEventListener("click", this.addLike.bind(this));
  }

  /**
   * Add one like to a media and to the sum of photographer total likes
   */
  addLike() {
    if (this.count >= 1) {
      return;
    }

    this.currentLikes++;
    this.count++;

    // Updating sum of media likes
    const likeNumber = this.dom.querySelector(".like__number");
    likeNumber.innerText = this.currentLikes;

    // Updating sum of photographer total likes
    const likeSumEl = document.querySelector(
      "article.photographer-infos .like__number"
    );
    const likeSum = likeSumEl.innerText;
    likeSumEl.innerText = parseInt(likeSumEl.innerText) + 1;
  }

  /**
   *
   * @returns {Integer}
   */
  getNumberOfLikes(currentLikes = this.currentLikes) {
    return currentLikes;
  }
}
