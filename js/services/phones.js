define(['./module'], function (services) {
    'use strict';
    services.factory('Phone', ['$resource',
	  function($resource){
	    return $resource('data/:phoneId.json', {}, {
	      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	    });
	  }]);
});
