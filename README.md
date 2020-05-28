<a href="http://www.bornfight.com">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-lib-boilerplate [[all b- libs](https://github.com/bornfight/b-lib-archive/)]
> Bornfight frontend project based on gulp, es6 and scss

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight/b-creative?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight/b-creative?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight/b-creative?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight/b-creative?style=flat-square)

##### ⚠ IMPORTANT NOTICE - module not yet published on npm ⚠
Change:
- package.json > "name": "c-lib-boilerplate"
- package.json > "description": "...."
- package.json > "main": "src/js/LibName.js"
- LibName.js > replace with your lib name in places where it is used
- add keywords to package.json

## 📦 Getting Started

- install `b-lib` trough __npm__ or pull ti from git

```
npm i @bornfight/b-lib
```

- include b-lib to your __JS__ and __SCSS__ after running __npm install__

## 🔨️ Usage 
###### JS
``` JS
import LibName from "@bornfight/b-lib";
```

###### SCSS
``` SCSS
@import "~b-lib/src/scss/b-lib.scss";
```

##### HTML markup

```HTML
<p class="b-lib-class">
    Lib Element
</p>
```

##### Basic usage tips
- element needs to have ...
- ...

##### Advanced usage
- ...
     
## 💎 Customization

## ✅ Properties

Option | Type | Default | Example | Description
------ | ---- | ------- | ------- | -----------
parentClass | string | element parent | 'js-parent' | Element will be wrapped and moved to that parent and not to initial parent element 

## 🚀 Useful to know

1. ...
2. ...
3. ...
   
### 📦 Contribute

#### Gulp based system 
 - [Gulp](https://gulpjs.com/) 4 used
 - [browsersync](https://browsersync.io/) for live reload
 
```bash
npm run dev - dev environent with browsersync
```

## License

MIT © [Bornfight](https://www.bornfight.com)
