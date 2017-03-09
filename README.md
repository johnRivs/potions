# Potions (still under development)
Minimal Gulp wrapper. 

#### How to use
1. `npm install potions --save-dev`
2. Create a `gulpfile.js` file and `require('potions')` within it.
3. Here's a sample config:
```js
var potions = require('potions');

potions({
    sass: [
        {
            input: ['app.scss'],
            output: 'app.css'
        }
    ],
    styles: [
        {
            input: ['vendor/library.css'],
            output: 'vendor.css'
        }
    ]
});
```

#### Progress
- ~~CSS~~
- ~~Sass~~
- Javascript
- File versioning
- Bublé
- Rollup
- Vue.js
- SVG
- Browsersync