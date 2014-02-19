var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
	$scope.currentStory;

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
	};

	$scope.createStory = function(currentStory) {
		$scope.stories.push({
			title: 'New Story',
			description: 'Description pending.',
			criteria: 'Criteria pending',
			status: 'Status pending',
			type: 'Type pending',
			reporter: 'Reporter pending',
			assignee: 'assignee pending'
		});
	};

	$scope.stories = [{
		title: 'Story 00',
		description: 'Description pending.',
		criteria: 'Criteria pending',
		status: 'To Do',
		type: 'Feature',
		reporter: 'Jan Milosh',
		assignee: 'Jan Milosh'
	}];

	$scope.statuses = [
		{name: 'Back Log'},
		{name: 'To Do'},
		{name: 'In Progress'},
		{name: 'Code Review'},
		{name: 'QA Review'},
		{name: 'Verified'},
		{name: 'Done'}
	];

	$scope.types = [
		{name: 'Feature'},
		{name: 'Enhancement'},
		{name: 'Bug'},
		{name: 'Spike'}
	];
});