// Tasker Module

    app.controller('taskCTRL', function ($scope, todoStorage) {
        // connect array of tasks to localStorage to get saved tasks
        var todos = $scope.todos = todoStorage.get();

        // adding task in localstorage
        $scope.addTask = function () {
            if ( $scope.newTask ) {
                var newtask = $scope.newTask.trim();
                    todos.push({
                        taskName : newtask,
                        done : false
                });
                todoStorage.put(todos);
                $scope.newTask = '';
            } else {
                return;
            }
        }

        //view full task description
        $scope.taskView = function () {
            alert('lol');
        }

        // remove selected task
        $scope.remove = function (taskIndex) {
            todos.splice(taskIndex, 1);
            todoStorage.put(todos);
        }

    });