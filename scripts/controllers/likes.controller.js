/**
 * @classdesc
 */
export class NumberOfLikes {
  constructor(media, mediaCardEl) {
    this.currentLikes = media.likes;
    this.mediaCardEl = mediaCardEl;
    this.count = 0;
  }

  /**
   * Add eventListener to like__container, on Click and on keypress Enter
   * @param {HTMLElement} mediaCardEl
   */
  addEvent(mediaCardEl) {
    const likeContainerEl = mediaCardEl.querySelector(".like__container");

    likeContainerEl.addEventListener("click", this.addLike.bind(this));

    likeContainerEl.addEventListener("keypress", (e) => {
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
    const likeNumberEl = this.mediaCardEl.querySelector(".like__number");
    likeNumberEl.innerText = this.currentLikes;

    // Updating sum of photographer total likes
    const likeSumEl = document.querySelector(
      "article.photographer-infos .like__number"
    );
    const likeSum = likeSumEl.innerText;
    likeSumEl.innerText = parseInt(likeSumEl.innerText) + 1;
  }

  /**
   * Return the current number of Likes
   * @param {number} currentLikes
   * @return {number}
   */
  getNumberOfLikes(currentLikes = this.currentLikes) {
    return currentLikes;
  }
}
