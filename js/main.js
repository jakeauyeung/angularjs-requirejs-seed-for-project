/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular/angular-route',
        'angular-resource': '../lib/angular/angular-resource',
        'angular-animate': '../lib/angular/angular-animate',
        'domReady': '../lib/requirejs-domready/domReady',
        '$': '../lib/zepto/zepto'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        '$': {
            exports: 'zepto'
        },
        'angular': {
            exports: 'angular',
            deps: ['$']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
