"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var ID = todo.id;
    var tittle = todo.title;
    var finished = todo.completed;
    logTodo(ID, tittle, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has Titile of: " + title + "\n    Is it finished? " + completed + "\n  ");
};
