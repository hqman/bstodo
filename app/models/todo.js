define(function(e,t,n){var r=e("backbone");return Todo=r.Model.extend({defaults:{title:"",completed:!1},toggle:function(){this.save({completed:!this.get("completed")})}}),Todo});