angular.module('application').controller('homeCtrl',
  ['$scope', '$interval', function($scope, $interval){
    var height = screen.height;
    var width = screen.width - 100;
    var elements = [];
    var element1 = angular.element('<div ></div>');
    var element2 = angular.element('<div ></div>');
    var element3 = angular.element('<div ></div>');
    elements.push(element1);
    elements.push(element2);
    elements.push(element3);

    function randomMoveElement(){
      elements[0].css({
        position: 'absolute',
        top: Math.floor((Math.random() * height) + 1) +'px',
        left:  Math.floor((Math.random() * width)) +'px',
        width: '50px',
        height: '50px',
        background: 'blue',
        zIndex: '2'
      });

      elements[1].css({
        position: 'absolute',
        top: Math.floor((Math.random() * height) + 1) +'px',
        left:  Math.floor((Math.random() * width)) +'px',
        width: '50px',
        height: '50px',
        background: 'pink',
        zIndex: '2'
      });

      elements[2].css({
        position: 'absolute',
        top: Math.floor((Math.random() * height) + 1) +'px',
        left:  Math.floor((Math.random() * width)) +'px',
        width: '50px',
        height: '50px',
        background: 'red',
        zIndex: '2'
      });
    }
    function addElement(){
      var body = angular.element(document).find('body').eq(0);
      var i = Math.floor((Math.random() * elements.length));
      randomMoveElement();
      body.append(elements[i]);
      //console.log('agregado');
    }

    

    //$interval(addElement, 600);

    
    //angular.element(document.querySelector('#div')).remove();
}]);
