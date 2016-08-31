var mainApp = angular.module("mainApp", ['ngRoute','ui.bootstrap']);

mainApp.directive('container', ['$window', function($window) {
    return {
        link: function(scope, elem, attrs) {
            scope.onResize = function() {
                var header = document.getElementsByTagName('header')[0];
                elem.windowHeight = $window.innerHeight - header.clientHeight;
                $(elem).height(elem.windowHeight);
            }
            scope.onResize();

            angular.element($window).bind('resize', function() {
                scope.onResize();
            })
        }
    }
}])

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'BiotecController'
		})
		.when('/menu', {
			templateUrl: 'views/menu.html',
			controller: 'BiotecController'
		})
		.when('/takePhoto', {
			templateUrl: 'views/takePhoto.html',
			controller: 'BiotecController'
		})
		.when('/explore', {
			templateUrl: 'views/exploreBiotec.html',
			controller: 'BiotecController'
		})
		.when('/alimentar', {
			templateUrl: 'views/alimentar.html',
			controller: 'CarouselDemoCtrl'
		})
		.when('/ambiente', {
			templateUrl: 'views/ambiente.html',
			controller: 'BiotecController'
		})
		.when('/saude', {
			templateUrl: 'views/saude.html',
			controller: 'BiotecController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('BiotecController', function($scope) {
	
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.touchHere = "Toque aqui";
	$scope.takePhoto = "Tirar uma foto";
	$scope.exploreBiotec = "Explorar a Biotecnologia";
});

mainApp.controller('CarouselDemoCtrl', function($scope) {

	$scope.myInterval = 3000;
	$scope.slides = [
		{
      		image: 'http://localhost/Biotec/assets/images/mirti.jpg',
      		texto: 'A Escola Superior de Biotecnologia tem vindo a demonstrar as propriedades antioxidantes e antimicrobianas do mirtilo. Os resultados da investigação apontam que o mirtilo tem um efeito benéfico sobre a obesidade.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/mandioca.jpg',
      		texto: 'A Escola Superior de Biotecnologia está a desenvolver utilidades para os resíduos provenientes da transformação de alguns alimentos. Dos resíduos da mandioca está a ser desenvolvida uma barra de cereais e do inhame, um substrato para produção de cogumelos.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/sumo.jpg',
      		texto: 'Comer fruta ou beber sumos de fruta naturais: será a mesma coisa? Quando fazemos um sumo natural perdemos a ação de regulação do trânsito intestinal e do metabolismo do colesterol e da glicose porque as fibras ou se perdem ou ficam mais pequenas. Também algumas vitaminas são destruídas pela exposição à luz e ao oxigénio.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/biof.jpg',
      		texto: 'A biofortificação, ou seja, o aumento da quantidade de micronutrientes disponíveis num alimento pode ser feita através da seleção genética ou por biotecnologia. A biofortificação é um modo relativamente barato e eficaz de combater a deficiência em vitaminas e minerais e já tem sido usada em vez da suplementação ou a fortificação industrial de alimentos.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/rad.jpg',
      		texto: 'O projecto EMERCON da Escola Superior de Biotecnologia está a desenvolver tratamentos alternativos para dar mais segurança às hortofrutícolas e aumentar o seu tempo de vida. Estes passam pela aplicação de técnicas emergentes, tais como impulsos eléctricos de alta intensidade, tratamentos com ozono, raios ultravioleta e combinação dos mesmos.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/froz.jpg',
      		texto: 'A qualidade de produtos congelados depende dos pré-tratamentos antes da congelação, do processo de congelação e do controlo das condições de armazenagem e distribuição. Do projecto HORTOCON da Escola Superior de Biotecnologia deverá resultar uma nova metodologia para optimizar a qualidade de frutos e vegetais congelados.'
    	},
    	{
      		image: 'http://localhost/Biotec/assets/images/esb.jpg',
      		texto: 'Faça-nos perguntas! Escreva para questoesbiotecnologia@porto.ucp.pt'
    	}
    	//{ imagem: 'http://localhost/Biotec/assets/images/mirti.jpg', texto: 'A Escola Superior de Biotecnologia tem vindo a demonstrar as propriedades antioxidantes e antimicrobianas do mirtilo. Os resultados da investigação apontam que o mirtilo tem um efeito benéfico sobre a obesidade.' },
		//{ imagem: 'http://localhost/Biotec/assets/images/mandioca.jpg', texto: 'A Escola Superior de Biotecnologia está a desenvolver utilidades para os resíduos provenientes da transformação de alguns alimentos. Dos resíduos da mandioca está a ser desenvolvida uma barra de cereais e do inhame, um substrato para produção de cogumelos.'}
		//{ imagem: 'http://localhost/Biotec/assets/images/sumo.jpg', texto: 'Comer fruta ou beber sumos de fruta naturais: será a mesma coisa? Quando fazemos um sumo natural perdemos a ação de regulação do trânsito intestinal e do metabolismo do colesterol e da glicose porque as fibras ou se perdem ou ficam mais pequenas. Também algumas vitaminas são destruídas pela exposição à luz e ao oxigénio.' },
		//{ imagem: 'http://localhost/Biotec/assets/images/biof.jpg', texto: 'A biofortificação, ou seja, o aumento da quantidade de micronutrientes disponíveis num alimento pode ser feita através da seleção genética ou por biotecnologia. A biofortificação é um modo relativamente barato e eficaz de combater a deficiência em vitaminas e minerais e já tem sido usada em vez da suplementação ou a fortificação industrial de alimentos.' },
		//{ imagem: 'http://localhost/Biotec/assets/images/rad.jpg', texto: 'O projecto EMERCON da Escola Superior de Biotecnologia está a desenvolver tratamentos alternativos para dar mais segurança às hortofrutícolas e aumentar o seu tempo de vida. Estes passam pela aplicação de técnicas emergentes, tais como impulsos eléctricos de alta intensidade, tratamentos com ozono, raios ultravioleta e combinação dos mesmos.' },
		//{ imagem: 'http://localhost/Biotec/assets/images/froz.jpg', texto: 'A qualidade de produtos congelados depende dos pré-tratamentos antes da congelação, do processo de congelação e do controlo das condições de armazenagem e distribuição. Do projecto HORTOCON da Escola Superior de Biotecnologia deverá resultar uma nova metodologia para optimizar a qualidade de frutos e vegetais congelados.' },
		//{ imagem: 'http://localhost/Biotec/assets/images/esb.jpg', texto: 'Faça-nos perguntas! Escreva para questoesbiotecnologia@porto.ucp.pt' }
		];

});		


