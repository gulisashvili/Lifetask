// Tasker Module

    app.controller('taskCTRL', function ($scope, Tasks, $location, $http) {
    	// get tasks from database
        // $scope.todos = Tasks.query(function() {
        //     console.log($scope.todos);
        // });
        $http.get('/api/tasks')
            .success(function(data, status, headers, config) {
                $scope.todos = data;
            })
            .error(function(data, status, headers, config) {
                alert('error' + status);
            });



        $scope.addTask = function () {
            var postData = { name : $scope.newTask.trim() } ;

            $http.post('/api/tasks', postData)
                .success(function(data, status, headers, config){
                    $location.path('/').replace();
                    $scope.newTask = '';
                })
                .error(function(data, status, headers, config) {
                    alert('error');
                })
        }



		// remove selected task
		// $scope.remove = function (taskIndex) {
		// 	$scope.todos.splice(taskIndex, 1);
		// 	// Tasks.save($scope.todos);
		// }
	});