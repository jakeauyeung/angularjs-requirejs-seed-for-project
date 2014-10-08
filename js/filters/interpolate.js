define(['./module'], function (filters) {
    'use strict';

    return filters.filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);

    return filters.filter('checkmark', function(){
    	return function(input) {
		    return input ? '\u2713' : '\u2718';
		  };
    });

});
