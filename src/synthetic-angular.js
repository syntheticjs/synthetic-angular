define([
	"./template.html",
	"./template2.html"
],
	function(tpl, tpl2) {
	
	Synthetic.createComponent('synthetic-angular', function($component) {
		$component.created(function($self, $scope) {
			$self.template(tpl, 'angular');
			
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});

	Synthetic.createComponent('synthetic-angular2', function($component) {
		$component.created(function($self, $scope) {
			$self.template(tpl2, 'angular');
			
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});
});