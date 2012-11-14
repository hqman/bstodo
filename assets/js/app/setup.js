	console.log('setup app....');
  seajs.config({
      alias: {
        //'es5-safe': 'gallery/es5-safe/0.9.3/es5-safe',
        //'json': 'gallery/json/1.0.2/json',
        'jquery': '/assets/js/lib/jquery/1.8.2/jquery',
        '$': '/assets/js/lib/jquery/1.8.2/jquery',
        'handlebars':'/assets/js/lib/handlebars/1.0.0/handlebars',
        'underscore': '/assets/js/lib/underscore/1.4.2/underscore',
        'backbone': '/assets/js/lib/backbone/0.9.2/backbone',
        'backbone.localstorage': '/assets/js/lib/backbone.localstorage/1.0/backbone.localstorage',
      },
      preload: [
        Function.prototype.bind ? '' : 'es5-safe',
        this.JSON ? '' : 'json',
        
        'seajs/plugin-text',
        'seajs/plugin-reload',
      ],
      debug:true,
       
      charset: 'utf-8'
    });

  seajs.use('/assets/js/app/bootstrap',function  (bootstrap) {
    //alert(init.message);
    
    bootstrap.init();
  });
