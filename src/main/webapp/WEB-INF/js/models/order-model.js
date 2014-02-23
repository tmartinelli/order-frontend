define([
  'underscore',
  'backbone',
], function(_, Backbone) {

	var OrderModel = Backbone.Model.extend({
	    urlRoot: '/order'
	});
	
	return OrderModel;

});