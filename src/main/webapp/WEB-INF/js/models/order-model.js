define([
  'underscore',
  'backbone',
], function(_, Backbone) {

	var Order = Backbone.Model.extend({
	    urlRoot: '/order',
	    defaults: {
	        status: ''
	    }
	});
	
	return Order;

});