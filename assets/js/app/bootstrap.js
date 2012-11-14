define(function(require, exports, module){

  var AppView = require('/assets/js/app/views/app');
   
 
    var ENTER_KEY = 13;


   

    exports.init=function(){
      console.log('start app....');

       // Kick things off by creating the **App**.
    new AppView();

    };

  });
