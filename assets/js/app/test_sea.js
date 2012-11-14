define(function(require,exports){
	//alert('hello seajs');

	var w=require('./test_w');
	var Handlebars=require('handlebars');
	//var test_tpl=require('./test.tpl');
	 var source = require('./test.tpl');

	  

	 var template = Handlebars.compile(source);

	 var context = {name: "wang kai", body: "This is my first post!"}
     var html    = template(context);


	console.log('test tpl content '+html);

	exports.message='hello sea';
	exports.do=w.doSomething;

});