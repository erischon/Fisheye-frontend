/**
 * @params {}
 * @property {Object} media
 */
export class NumberOfLikes {
  constructor(media, dom) {
    this.currentLikes = media.likes;
    this.dom = dom;
    this.count = 0;
  }

  /**
   * Add eventListener to like__container, on Click and on keypress Enter
   * @param {HTMLElement} dom
   */
  addEvent(dom) {
    const likeDom = dom.querySelector(".like__container");

    likeDom.addEventListener("click", this.addLike.bind(this));

    likeDom.addEventListener("keypress", (e) => {
      console.log(e.key);
      if (e.key === "Enter") {
        this.addLike();
      }
    });
  }

  /**
   * Add ONE like to a media and to the sum of photographer total likes
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
   * Get the current number of Likes
   * @return {Number}
   */
  getNumberOfLikes(currentLikes = this.currentLikes) {
    return currentLikes;
  }
}
