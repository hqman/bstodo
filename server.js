var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);


  <script src="assets/js/lib/jquery.min.js"></script>
  <script src="assets/js/lib/lodash.min.js"></script>
  <script src="assets/js/lib/backbone-min.js"></script>
  <script src="assets/js/lib/backbone-localstorage.js"></script>

  <script src="assets/js/app/models/todo.js"></script>
  <script src="assets/js/app/collections/todos.js"></script>
  <script src="assets/js/app/views/todo.js"></script>
  <script src="assets/js/app/views/app.js"></script>
  <script src="assets/js/app/routers/router.js"></script>
  <script src="assets/js/app/bootstrap.js"></script>