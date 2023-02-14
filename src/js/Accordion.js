/**
 * b-accordion v 1.0.14
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-accordion
 *
 * Year: 2020
 */

import gsap from "gsap";

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

    this.openingEase = this.defaults.openingEase;
    this.closingEase = this.defaults.closingEase;
    this.openDuration = this.defaults.openDuration;
    this.closeDuration = this.defaults.closeDuration;
    this.openDelay = this.defaults.openDelay;
    this.closeDelay = this.defaults.closeDelay;
    this.onOpenStart = this.defaults.onOpenStart;
    this.onCloseStart = this.defaults.onCloseStart;
    this.onOpenComplete = this.defaults.onOpenComplete;
    this.onCloseComplete = this.defaults.onCloseComplete;

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
      this.accordionController(accordionSingle, accordion, mono);
    });
  }

  /**
   *
   * @param {HTMLElement} accordionSingle
   * @param {HTMLElement} accordion
   * @param {boolean} mono
   */
  accordionController(accordionSingle, accordion, mono) {
    let accordionHeader = accordionSingle.querySelector(".js-accordion-header");

    if (accordionHeader == null) {
      accordionHeader = accordionSingle;
    }

    if (accordionHeader == null) {
      throw new Error("'js-accordion-header' missing!");
    }

    const accordionContent = accordionSingle.querySelector(
      ".js-accordion-panel"
    );

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
        this.closeAccordion(ev.currentTarget, accordionContent, accordion);
        return;
      }

      this.openAccordion(ev.currentTarget, accordionContent, accordion, mono);
    });
  }

  /**
   *
   * @param {HTMLElement} accordionHeader
   * @param {HTMLElement} accordionContent
   * @param {HTMLElement} accordion
   */
  closeAccordion(accordionHeader, accordionContent, accordion) {
    accordionHeader.classList.remove("is-opened");

    gsap.fromTo(
      accordionContent,
      {
        height: accordionContent.offsetHeight,
      },
      {
        duration: this.closeDuration,
        height: 0,
        delay: this.closeDelay,
        ease: this.closingEase,
        onStart: () => {
          this.onCloseStart(accordionHeader, accordionContent);
        },
        onComplete: () => {
          this.onCloseComplete(accordionHeader, accordionContent);
        },
      }
    );

    if (accordionHeader.parentNode.classList.contains("js-accordion-single")) {
      accordionHeader.parentNode.classList.remove("is-opened");
    }

    this.haveActive(accordion);
  }

  /**
   *
   * @param {HTMLElement} accordionHeader
   * @param {HTMLElement} accordionContent
   * @param {HTMLElement} accordion
   * @param {boolean} mono
   */
  openAccordion(accordionHeader, accordionContent, accordion, mono) {
    if (mono) {
      const accordionSingles = accordion.querySelectorAll(
        ".js-accordion-single"
      );

      for (let i = 0; i < accordionSingles.length; i++) {
        const accordionHeaderInactive = accordionSingles[i].querySelector(
          ".js-accordion-header"
        );
        const accordionContentInactive = accordionSingles[i].querySelector(
          ".js-accordion-panel"
        );

        if (accordionHeader === accordionHeaderInactive) {
          continue;
        }

        accordionHeaderInactive.classList.remove("is-opened");
        if (
          accordionHeader.parentNode.classList.contains("js-accordion-single")
        ) {
          accordionHeaderInactive.parentNode.classList.remove("is-opened");
        }

        if (accordionContentInactive.style?.height !== "0px") {
          gsap.to(accordionContentInactive, {
            duration: this.closeDuration,
            height: 0,
            delay: this.closeDelay,
            ease: this.closingEase,
            onStart: () => {
              this.onCloseStart(accordionHeader, accordionContent);
            },
            onComplete: () => {
              this.haveActive(accordion);
              this.onCloseComplete(accordionHeader, accordionContent);
            },
          });
        }
      }
    }

    accordionHeader.classList.add("is-opened");
    if (accordionHeader.parentNode.classList.contains("js-accordion-single")) {
      accordionHeader.parentNode.classList.add("is-opened");
    }
    let height = 0;

    gsap.set(accordionContent, {
      height: "auto",
      onComplete: () => {
        height = accordionContent.clientHeight;

        gsap.set(accordionContent, {
          height: 0,
          onComplete: () => {
            gsap.to(accordionContent, {
              duration: this.openDuration,
              height: height,
              ease: this.openingEase,
              delay: this.openDelay,
              onStart: () => {
                this.onOpenStart(accordionHeader, accordionContent);
              },
              onComplete: () => {
                accordionContent.style.height = "auto";
                this.onOpenComplete(accordionHeader, accordionContent);
              },
            });
          },
        });
      },
    });
  }

  /**
   *
   * @param {HTMLElement} accordion
   */
  haveActive(accordion) {
    if (accordion.querySelectorAll(".is-opened").length > 0) {
      accordion.classList.add("have-active");
    } else {
      accordion.classList.remove("have-active");
    }
  }
}
