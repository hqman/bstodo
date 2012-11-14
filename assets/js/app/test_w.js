define(function(require,exports){

	var $=require('jquery');

	var backbonelocalstorage=require('backbone.localstorage');
	console.dir(backbonelocalstorage);
	//alert('hello seajs');
	 exports.message='hello test_w';
	 exports.doSomething = function() {
	 	console.log('do some thing');
	 };
});