angular.module('application').controller('homeCtrl',
  ['$scope', '$interval', '$dbApi','$timeout',  function($scope, $interval, $dbApi, $timeout){
    var height = screen.height;
    var width = screen.width - 100;
    var elements = [];
    var figuras = ['cruz.png', 'cuadro.png', 'curculo.png', 'punteado.png'];
    for(var times = 0; times < 10; times++){
      for(var figi = 0; figi < figuras.length; figi++){
        var randomTime = Math.floor(Math.random() * 5) + 2;
        var element1 = angular.element('<img style="-webkit-animation: appear ' + randomTime +'s infinite; animation: appear ' + randomTime +'s infinite;" src="./assets/images/' + figuras[figi] + '">');
        elements.push(element1);
      }
    }
    for(var elementsi = 0; elementsi < elements.length; elementsi++){
      var body = angular.element(document).find('body').eq(0);
      randomMoveElement();
      body.append(elements[elementsi]);
    }
   
    $scope.regist = {};
    $scope.sendRegsit = function(){
      $dbApi.regist($scope.regist);
      $scope.regist = {};
      $scope.form = false;

    }

    function randomMoveElement(){
      var scale, rotate, size;
      for(var i = 0; i < elements.length; i++){
        scale = Math.floor(Math.random() * 9) + 2;
        rotate = Math.floor((Math.random() * 160));
        size = Math.floor((Math.random() * 120)) + 20;
        elements[i].css({
          position: 'absolute',
          top: Math.floor((Math.random() * height)) +'px',
          left:  Math.floor((Math.random() * width)) +'px',
          transform:'rotate(' + rotate + 'deg)',
          height: size + 'px',
          width: size + 'px',
          zIndex: '-1'
        });
      }
    }
    function addElement(){
     
      randomMoveElement();
     
      //console.log('agregado');
    }

    

    //$interval(addElement, 600);
    //$interval(addElement, 200);
    $interval(addElement, 1000);



    
    //angular.element(document.querySelector('#div')).remove();
}]);
