/**
 * b-accordion v 1.0.14
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-accordion
 *
 * Year: 2020
 */

import SingleAccordionInstance from "./SingleAccordionInstance.js";

export default class Accordion {
  /**
   * @param {string} [jsClass]
   * @param options
   * @param {string} [options.openingEase]
   * @param {string} [options.closingEase]
   * @param {number} [options.openDuration]
   * @param {number} [options.closeDuration]
   * @param {number} [options.openDelay]
   * @param {number} [options.closeDelay]
   * @param {number} [options.onOpenStart]
   * @param {number} [options.onCloseStart]
   * @param {number} [options.onOpenComplete]
   * @param {number} [options.onCloseComplete]
   */
  constructor(jsClass = ".js-accordion", options = {}) {
    let _defaults = {
      openingEase: "power3.out",
      closingEase: "power2.out",
      openDuration: 0.5,
      closeDuration: 0.3,
      openDelay: 0,
      closeDelay: 0,
      onOpenStart: () => {},
      onCloseStart: () => {},
      onOpenComplete: () => {},
      onCloseComplete: () => {},
    };

    this.defaults = Object.assign({}, _defaults, options);

    this.props = {
      openingEase: this.defaults.openingEase,
      closingEase: this.defaults.closingEase,
      openDuration: this.defaults.openDuration,
      closeDuration: this.defaults.closeDuration,
      openDelay: this.defaults.openDelay,
      closeDelay: this.defaults.closeDelay,
      onOpenStart: this.defaults.onOpenStart,
      onCloseStart: this.defaults.onCloseStart,
      onOpenComplete: this.defaults.onOpenComplete,
      onCloseComplete: this.defaults.onCloseComplete,
    };

    this.accordion = document.querySelectorAll(jsClass);
    if (this.accordion.length > 0) {
      this.accordion.forEach((accordion) => {
        const mono = accordion.classList.contains("is-mono");
        this.initAccordion(accordion, mono);
      });
    }
  }

  /**
   *
   * @param {HTMLElement} accordion
   * @param {boolean} mono
   */
  initAccordion(accordion, mono) {
    if (accordion.classList.contains("is-initialed")) return;
    console.log("Accordion instance init()");

    accordion.classList.add("is-initialed");

    const accordionSingles = accordion.querySelectorAll(".js-accordion-single");

    accordionSingles.forEach((accordionSingle) => {
      new SingleAccordionInstance(accordionSingle, accordion, mono, this.props);
    });
  }
}
