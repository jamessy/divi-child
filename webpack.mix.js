// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/scripts.js', 'js')
.sass('src/styles/scss/styles.scss', 'css')
.setPublicPath('dist')
.browserSync('http://floorgallery.test');