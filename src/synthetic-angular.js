define([
	"./template.html"
],
	function(tpl) {
	
	Synthetic.createComponent('synthetic-angular', function($component) {
		$component.created(function($self) {
			$self.template(tpl, 'angular');
		});

		$component.watch('answers', ['response'], function(response) {
			console.log('response is ', response);
		});
	});
});