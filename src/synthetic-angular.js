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
			
		});

		$component.watch('attributes', ['template'], function($generator, template) {
			console.log('watch attribute', template);
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
			$self.watch('attributes', ['template'], function($generator, template) {
				if (template)
				$generator.template(tpl2, 'angular');
			});

			$self.watch('attributes', ['title'], function($scope, title) {
				if (title)
					console.log('catched title', title, $scope);
			});
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});
});