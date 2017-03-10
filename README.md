# Potions (still under development)
Minimal Gulp wrapper. 

#### How to use
1. Install [Gulp](http://gulpjs.com/).
2. `npm install potions --save-dev`.
3. Create a `gulpfile.js` file, `require('potions')` and define your tasks.
4. Run `gulp` in the terminal.

Here's a sample config:
```js
var potions = require('potions');

potions(mix => {
    mix.js(['app.js'], 'app.js') // ES2015 transpiling and CommonJS/ES2015 module bundling
       .sass(['app.scss'], 'app.css') // Autoprefix and compile Sass
       .styles(['vendor/library-a.css','vendor/library-b.css'], 'vendor.css'); // Concatenate and autoprefix CSS files
});
```

#### Progress
- ~~CSS~~
- ~~Sass~~
- Javascript
- File versioning
- ~~Bublé~~
- ~~Rollup~~
- Vue.js
- SVG
- Browsersync