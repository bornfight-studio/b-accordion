import gsap from "../../node_modules/gsap/index.js";

export default class Open {
  /**
   *
   * @param {HTMLElement} header
   * @param {HTMLElement} content
   * @param {HTMLElement} accordion
   * @param {boolean} mono
   * @param {Object} props
   */
  constructor(header, content, accordion, mono, props) {
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

        if (header === accordionHeaderInactive) {
          continue;
        }

        accordionHeaderInactive.classList.remove("is-opened");
        if (header.parentNode.classList.contains("js-accordion-single")) {
          accordionHeaderInactive.parentNode.classList.remove("is-opened");
        }

        if (accordionContentInactive.style?.height !== "0px") {
          gsap.to(accordionContentInactive, {
            duration: props.closeDuration,
            height: 0,
            delay: props.closeDelay,
            ease: props.closingEase,
            onStart: () => {
              props.onCloseStart(header, content);
            },
            onComplete: () => {
              this.haveActive(accordion);
              props.onCloseComplete(header, content);
            },
          });
        }
      }
    }

    header.classList.add("is-opened");
    if (header.parentNode.classList.contains("js-accordion-single")) {
      header.parentNode.classList.add("is-opened");
    }
    let height = 0;

    gsap.set(content, {
      height: "auto",
      onComplete: () => {
        height = content.clientHeight;

        gsap.set(content, {
          height: 0,
          onComplete: () => {
            gsap.to(content, {
              duration: props.openDuration,
              height: height,
              ease: props.openingEase,
              delay: props.openDelay,
              onStart: () => {
                props.onOpenStart(header, content);
              },
              onComplete: () => {
                content.style.height = "auto";
                props.onOpenComplete(header, content);
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
  } /**/
}
