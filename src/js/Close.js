import gsap from "../../node_modules/gsap/index.js";

export default class Close {
    /**
     *
     * @param {HTMLElement} header
     * @param {HTMLElement} content
     * @param {HTMLElement} accordion
     * @param {Object} props
     */
    constructor(header, content, accordion, props) {
        header.classList.remove("is-opened");

        gsap.fromTo(content, {
            height: content.offsetHeight,
        }, {
            duration: props.closeDuration, height: 0, delay: props.closeDelay, ease: props.closingEase, onStart: () => {
                props.onCloseStart(header, content);
            }, onComplete: () => {
                props.onCloseComplete(header, content);
            },
        });

        if (header.parentNode.classList.contains("js-accordion-single")) {
            header.parentNode.classList.remove("is-opened");
        }

        this.haveActive(accordion);
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
