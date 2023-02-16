import Open from "./Open.js";
import Close from "./Close.js";
import gsap from "../../node_modules/gsap/index.js";

export default class SingleAccordionInstance {
  /**
   *
   * @param {HTMLElement} single
   * @param {HTMLElement} accordion
   * @param {boolean} mono
   * @param {Object} props
   */
  constructor(single, accordion, mono, props) {
    let accordionHeader = single.querySelector(".js-accordion-header");

    if (accordionHeader == null) {
      accordionHeader = single;
    }

    if (accordionHeader == null) {
      throw new Error("'js-accordion-header' missing!");
    }

    const accordionContent = single.querySelector(".js-accordion-panel");

    if (accordionContent == null) {
      throw new Error("'js-accordion-panel' missing!");
    }

    if (!accordionHeader.classList.contains("is-opened")) {
      gsap.set(accordionContent, {
        height: 0,
      });
    }

    accordionHeader.addEventListener("click", (ev) => {
      ev.preventDefault();

      if (ev.currentTarget.classList.contains("is-opened")) {
        new Close(ev.currentTarget, accordionContent, accordion, props);
        return;
      }
      new Open(ev.currentTarget, accordionContent, accordion, mono, props);
    });
  }
}
