<a href="https://www.bornfight.studio/">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-accordion [[all b- libs](https://github.com/bornfight-studio/b-lib-archive/)]

> Bornfight Studio frontend lib for accordion type interactions/elements

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight-studio/b-accordion?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight-studio/b-accordion?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight-studio/b-accordion?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight-studio/b-accordion?style=flat-square)

## 📦 Getting Started

Dependency: `gsap`

- install `b-accordion` trough **npm** or pull ti from git

```
npm i @bornfight/b-accordion
```

- include b-accordion to your **JS** and **SCSS** after running **npm install**

## 🔨️ Usage

#### JS

```JS
import Accordion from "@bornfight/b-accordion";
```

###### Basic

```JS
new Accordion();
```

###### Advanced

```JS
new Accordion(".js-accordion", {
    openDuration: 0.5,
    openDelay: 0,
    openingEase: "bounce.out",
    closeDuration: 0.3,
    closeDelay: 0,
    closingEase: "bounce.in",
    onCloseStart: (header, content) => {
        console.log("close start", header, content);
    },
    onCloseComplete: (header, content) => {
        console.log("close complete", header, content);
    },
    onOpenStart: (header, content) => {
        console.log("open start", header, content);
    },
    onOpenComplete: (header, content) => {
        console.log("open complete", header, content);
    },
});
```

###### SCSS

```SCSS
@import "~@bornfight/b-accordion/src/scss/style.scss";
```

- scss import is not mandatory but following code must be included

```CSS
.js-accordion-panel {
    backface-visibility: hidden;
    overflow: hidden;
    height: 0;
}
```

##### HTML markup

Mono accordion with single item header as hit area (only one item can be active and only item header will trigger
open/close). Main wrapper "js-accordion" need to have "is-mono" class

```HTML

<div class="js-accordion is-mono">
    <div class="js-accordion-single">
        <div class="js-accordion-header">
            <p>
                Accordion header title 1
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>

    <div class="js-accordion-single">
        <div class="js-accordion-header">
            <p>
                Accordion header title 2
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>
</div>
```

Single item header as hit area (only header will trigger open/close)

```HTML

<div class="js-accordion">
    <div class="js-accordion-single">
        <div class="js-accordion-header">
            <p>
                Accordion header title 1
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>

    <div class="js-accordion-single">
        <div class="js-accordion-header">
            <p>
                Accordion header title 2
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>
</div>
```

- Single item full body as hit area (item can be opened and closed wherever you click)

```HTML

<div class="js-accordion">
    <div class="js-accordion-single js-accordion-header">
        <div>
            <p>
                Accordion header title 1
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>

    <div class="js-accordion-single js-accordion-header">
        <div>
            <p>
                Accordion header title 2
            </p>
        </div>
        <div class="js-accordion-panel">
            <!-- CONTENT -->
            ...
        </div>
    </div>
</div>
```

### Options

| Option          | Type   | Default                 | Example         | Note                                                         |
| --------------- | ------ | ----------------------- | --------------- | ------------------------------------------------------------ |
| jsClass         | string | '.js-accordion'         | '.my-accordion' |
| openingEase     | string | 'power4.out'            | 'expo.out'      | GSAP easing                                                  |
| closingEase     | string | 'power4.in'             | 'expo.in'       | GSAP easing                                                  |
| openDuration    | number | 0.5                     | 0.2             | seconds                                                      |
| closeDuration   | number | 0.3                     | 1               | seconds                                                      |
| openDelay       | number | 0                       | 0.2             | seconds                                                      |
| closeDelay      | number | 0                       | 0.2             | seconds                                                      |
| onOpenStart     | method | (header, content) => {} |                 | returns header and content of current item (header, content) |
| onCloseStart    | method | (header, content) => {} |                 | returns header and content of current item (header, content) |
| onOpenComplete  | method | (header, content) => {} |                 | returns header and content of current item (header, content) |
| onCloseComplete | method | (header, content) => {} |                 | returns header and content of current item (header, content) |

## 💎 Customization

- use your imagination

## 🚀 Useful to know

1. any element inside `js-accordion-single` can be trigger for open/close. It just needs to have `js-accordion-header`
   class
2. only one element inside `js-accordion-single` can have `js-accordion-header` class

### 📦 Contribute

#### Gulp based system

- [Gulp](https://gulpjs.com/) 4 used
- [browsersync](https://browsersync.io/) for live reload

```bash
npm run dev - dev environent with browsersync
```

## License

MIT © [Bornfight Studio](https://www.bornfight.studio/)
