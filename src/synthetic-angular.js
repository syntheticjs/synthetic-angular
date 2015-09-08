define([
	"./template.html"
],
	function(tpl) {
	
	Synthetic.createComponent('synthetic-angular', function($component) {
		$component.created(function($self) {
			$self.template(tpl, 'angular');
		});
	});
});