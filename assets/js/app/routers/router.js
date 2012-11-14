define(function(require, exports, module){

  var Backbone = require('backbone');
  this._ = require('underscore');

  var Todos=require('/assets/js/app/collections/todos');

	// Todo Router
	// ----------

	var Workspace = Backbone.Router.extend({
		routes:{
			'*filter': 'setFilter'
		},

		setFilter: function( param ) {
			// Set the current filter to be used
			TodoFilter = param.trim() || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			Todos.trigger('filter');
		}
	});

	var TodoRouter = new Workspace();
	Backbone.history.start();




	return TodoRouter;

});


