<a href="http://www.bornfight.com">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-accordion [[all b- libs](https://github.com/bornfight/b-lib-archive/)]
> Bornfight frontend project based on gulp, es6 and scss

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight/b-accordion?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight/b-accordion?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight/b-accordion?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight/b-accordion?style=flat-square)

## 📦 Getting Started

Dependency: `gsap`

- install `b-accordion` trough __npm__ or pull ti from git

```
npm i @bornfight/b-accordion
```

- include b-accordion to your __JS__ and __SCSS__ after running __npm install__

## 🔨️ Usage 

###### JS
``` JS
import Accordion from "@bornfight/b-accordion";
```

###### SCSS
``` SCSS
@import "~@bornfight/b-accordion/src/scss/b-accordion.scss";
```

* scss import is not mandatory but following code must be included
```CSS
.js-accordion-panel {
    backface-visibility: hidden;
    overflow: hidden;
    height: 0;
}
```

##### HTML markup

Mono accordion with single item header as hit area (only one item can be active and only item header will trigger open/close). Main wrapper "js-accordion" need to have "is-mono" class

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
     
## 💎 Customization
- use your imagination

## 🚀 Useful to know

1. any element inside `js-accordion-single` can be trigger for open/close. It just needs to have `js-accordion-header` class
2. only one element inside `js-accordion-single` can have `js-accordion-header` class
   
### 📦 Contribute

#### Gulp based system 
 - [Gulp](https://gulpjs.com/) 4 used
 - [browsersync](https://browsersync.io/) for live reload
 
```bash
npm run dev - dev environent with browsersync
```

## License

MIT © [Bornfight](https://www.bornfight.com)
