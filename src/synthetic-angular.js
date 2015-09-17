define([
	"./template.html",
	"./template2.html"
],
	function(tpl, tpl2) {
	
	Synthetic.createComponent({
			name: 'synthetic-angular',
			engine: 'angular'
		}, function($component) {
		
		$component.created(function($self, $scope, $generator) {
			$generator.template(tpl);
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});

	Synthetic.createComponent({
		name: 'synthetic-angular2',
		engine: 'angular'
	}, function($component) {
		$component.created(function($self, $scope) {
			setTimeout(function() {
				console.log('init template!');
				$self.$template(tpl2, 'angular');
			}, 700);			
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});
});