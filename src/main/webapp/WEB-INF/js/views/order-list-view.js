define([
  'jquery', 
  'underscore', 
  'backbone', 
  'collections/order-collection', 
  'text!templates/order-list-template.html'], 
function($, _, Backbone, OrderCollection, OrderListTemplate) {

		$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
			options.url = $("#orderBackendURL").val() + options.url;
		});
		
		var orders = new OrderCollection();
		
		var OrderListView = Backbone.View.extend({
			el: $(".page"),
			initialize: function(){
		    	orders.on('change', this.render, this);
		    	this.render();
		    },
		    render: function(){
		    	var that = this;
		    	orders.fetch({
		    		success: function(orders) {
		    			var template = _.template(OrderListTemplate, {orders: orders.models});
		    			that.$el.html(template);
		    		}
		    	});
		    },
		    events: {
		    	"click .glyphicon-arrow-right": "nextStage"
		    },
		    nextStage: function(event) {
		    	var orderId = $(event.currentTarget).data("order-id");
		    	var order = orders.get(orderId);
		    	order.save({id: orderId}, { 
					success: function(model) {
						alert("Order updated successfully!");
					},
		    		error: function(model, reponse) {
		    			alert(reponse.responseText);
		    		}
		    	});
		    }
		});
		
		return OrderListView;

});