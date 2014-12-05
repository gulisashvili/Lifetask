var app = angular.module('TodoApp', ['ngResource', 'ngRoute','ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: '/partials/main',
			controller: 'MainCTRL'
		});

});

app.controller('MainCTRL', function ($scope, $modal, $templateCache, $http, $route) {
  
  $scope.activeTasksArr = [];
  $scope.doneTasksArr = [];

  $scope.tasks = [];
  $scope.tasksArr = [];
  
  $scope.init = function() {

    $http.get('/tasks').
      success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
        $scope.tasks = $scope.tasksArr = data.tasks;
        for(var i=0; i < $scope.tasks.length; i++) {
          if($scope.tasks[i].done == false) {
            $scope.activeTasksArr.push($scope.tasks[i]);
          } else {
            $scope.doneTasksArr.push($scope.tasks[i]);
          }
        }
        $scope.tasks = $scope.activeTasksArr;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(status)
      });

  };

  $scope.init();

    $scope.doneTasks = function() {
      $scope.tasks = $scope.tasksArr;
      $scope.tasks = $scope.doneTasksArr;
    };

    $scope.activeTasks = function() {
      $scope.tasks = $scope.tasksArr;
      $scope.tasks = $scope.activeTasksArr;
    };

 



  $scope.openCreateTaskModal = function() {
  	
  	$modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'CreateTaskModalCTRL'
    });
  
  };


  $scope.deleteTask = function(task) {
    $http.delete('/tasks/' + task._id + '/delete');
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
  };


  $scope.viewTask = function(task) {

    var modalInstance = $modal.open({
      templateUrl: '/partials/view-task',
      controller: 'ViewTaskCTRL',
      resolve: {
        task: function () {
          return task;
        }
      }
    });

  };


  $scope.editTask = function(task) {
    var modalInstance = $modal.open({
      templateUrl: '/partials/edit-task',
      controller: 'EditTaskCTRL',
      resolve: {
        task: function () {
          return task;
        }
      }
    });
  };





});

app.controller('CreateTaskModalCTRL', function ($scope, $modalInstance, $http, $route) {

	$scope.task = {
		name: '',
		description: ''
	};

  $scope.save = function () {
  	
  	$http.post('/tasks/new', $scope.task)
  		.success(function(data, status, headers, config) {
    		// this callback will be called asynchronously
    		// when the response is available
        if(data.status == "success") {
          $route.reload();
          $modalInstance.dismiss('cancel');
        }
  		}).
  		error(function(data, status, headers, config) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  			console.log('error')
  		});
  
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});


app.controller('ViewTaskCTRL', function($scope, $modalInstance, $http, $route, task) {
  $scope.task = {
    name: task.name,
    description: task.description,
    done: task.done,
    id: task._id
  }; 

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.doneTask = function() {
    var sendData = {
      done: true
    };

    $http.put('/tasks/' + $scope.task.id + '/done', sendData);
    $modalInstance.dismiss('cancel');
    $route.reload();

  };


});



app.controller('EditTaskCTRL', function($scope, $modalInstance, $http, $route, task) {
  $scope.task = {
    name: task.name,
    description: task.description,
    done: task.done,
    id: task._id
  }; 

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.updateTask = function(name, description) {
    
    var sendData = {
      name: name,
      description: description
    };

    $http.put('/tasks/' + $scope.task.id + '/update', sendData);
    $modalInstance.dismiss('cancel');
    $route.reload();
  
  };

});







