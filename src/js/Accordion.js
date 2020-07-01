/**
 * b-accordion v 1.0.9
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-accordion
 *
 * Year: 2020
 */

import gsap from "gsap";

export default class Accordion {
    constructor(jsClass = ".js-accordion") {
        this.accordion = document.querySelectorAll(jsClass);
        if (this.accordion.length > 0) {
            this.accordion.forEach(accordion => {
                let mono = false;
                if (accordion.classList.contains("is-mono")) {
                    mono = true;
                }

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
        console.log("Accordion instance init()");

        const accordionSingles = accordion.querySelectorAll(".js-accordion-single");

        accordionSingles.forEach(accordionSingle => {
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

        const accordionContent = accordionSingle.querySelector(".js-accordion-panel");

        if (accordionContent == null) {
            throw new Error("'js-accordion-panel' missing!");
        }

        gsap.set(accordionContent, {
            height: 0
        });

        accordionHeader.addEventListener("click", ev => {
            ev.preventDefault();

            if (ev.currentTarget.classList.contains("is-opened")) {
                this.closeAccordion(ev.currentTarget, accordionContent);
                return;
            }

            this.openAccordion(ev.currentTarget, accordionContent, accordion, mono);
        });
    }

    /**
     *
     * @param {HTMLElement} accordionHeader
     * @param {HTMLElement} accordionContent
     */
    closeAccordion(accordionHeader, accordionContent) {
        accordionHeader.classList.remove("is-opened");
        if (accordionHeader.parentNode.classList.contains("js-accordion-single")) {
            accordionHeader.parentNode.classList.remove("is-opened");
        }

        gsap.to(accordionContent, {
            duration: 0.4,
            height: 0,
            ease: "power3.in"
        });
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
            const accordionSingles = accordion.querySelectorAll(".js-accordion-single");

            accordionSingles.forEach(accordionSingle => {
                const accordionHeaderInactive = accordionSingle.querySelector(
                    ".js-accordion-header"
                );
                const accordionContentInactive = accordionSingle.querySelector(
                    ".js-accordion-panel"
                );

                if (accordionHeader === accordionHeaderInactive) {
                    return;
                }

                accordionHeaderInactive.classList.remove("is-opened");
                if (accordionHeader.parentNode.classList.contains("js-accordion-single")) {
                    accordionHeaderInactive.parentNode.classList.remove("is-opened");
                }

                gsap.to(accordionContentInactive, {
                    duration: 0.4,
                    height: 0,
                    ease: "power3.in"
                });
            });
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
                            duration: 0.5,
                            height: height,
                            ease: "power3.out",
                            onComplete: () => {
                                accordionContent.style.height = "auto";
                            }
                        });
                    }
                });
            }
        });
    }
}

