/*  s e r v i c e s  */
'use strict';

// save and update in localstorage
// app.factory('todoStorage', function () {
//         var STORAGE_ID = 'todos';

//         return {
//                 get: function () {
//                         return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
//                 },

//                 put: function (todos) {
//                         localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
//                 }
//         };
// });


// save and update in database
app.factory('Tasks', function ($resource) {
    return $resource('/api/tasks') || '[]';
});

