define([
  'underscore',
  'backbone',
  'models/order-model'
], function(_, Backbone, Order) {

	var Orders = Backbone.Collection.extend({
		url: "/orders",
		model: Order,
		initialize: function() {
			this.sort_key = 'id';
		},		
		comparator: function(a, b) {
		    a = a.get(this.sort_key);
		    b = b.get(this.sort_key);
		    return a > b ? 1 : a < b ? -1 : 0;
		}  
	});
	
	return Orders;

});