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
			console.log('watch attribute temaplte:', template);
			setTimeout(function() { $generator.template(tpl); }, 1000);
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('watch attribute response:', response);
		});
	});

	Synthetic.createComponent({
		name: 'synthetic-angular2',
		engine: 'angular'
	}, function($component) {
		$component.created(function($self, $scope) {
			$self.on('rendered', function() {
				console.log("%crendered", "color:red;font-size:16px;font-weight:bold;", (window.timeTest - (new Date()))+'ms');
			});


			$self.watch('attributes', ['title'], function($scope, title) {
				if (title)
					console.log('catched title', title, $scope);
			});
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});

		$component.watch('attributes', ['template'], function($generator, template) {
			if (template) {
				console.log("%ctemplated", "color:pink;font-size:16px;font-weight:bold;", (window.timeTest - (new Date()))+'ms');
				$generator.template(tpl2, 'angular');
			}
		});
	});


	Synthetic.createComponent({
		name: 'synthetic-angular3',
		engine: 'angular'
	}, function($component) {
		$component.watch('attributes', ['supertemplate'], function($generator, $scope, $self, supertemplate) {
			if (supertemplate) {
				$generator.template('<span>Subtemplate: {{$entity.test}} {{t}}</span>');
				setTimeout(function() {
					$self.$apply(function() {
						$scope.$entity = {
							test: Math.random()
						};
					});
				},2000);
			}
		});
	});

	Synthetic.$$angularApp.directive('fxFx', function() {
		return {
			restrict: 'A',
			priority: 700,
			controller: function($element) {
				console.log("%c<"+$element[0].tagName+">[fxFx]:controller()", "color:#F216F0;font-weight:bold;", $element[0]);
			},
			compile: function($element) {
				console.log("%c<"+$element[0].tagName+">[fxFx]:compile()", "color:#F216F0;font-weight:bold;", $element[0]);
				return {
					pre: function($scope, $element) {
						console.log("%c<"+$element[0].tagName+">[fxFx]:pre()", "color:#F216F0;font-weight:bold;", $element[0]);
					},
					post: function($scope, $element) {
						console.log("%c<"+$element[0].tagName+">[fxFx]:post()", "color:#F216F0;font-weight:bold;", $element[0]);
					}
				}
			}
		}
	});
});