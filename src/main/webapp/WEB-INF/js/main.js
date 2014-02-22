require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    templates: '../templates'
  }
});

require([
  'jquery', 
  'views/order-list-view'], 
function($, OrderListView) {
	$(function() {
		var orderListView = new OrderListView();
		orderListView.render();
	});
});