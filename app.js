(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahe',
		price: 2.95,
		description: 'Orginal gem',
	}
})();