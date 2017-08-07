angular.module('application')
.factory('$dbApi', function($http){
    var baseUrl = 'http://www.chicleypegacreativo.com/phpChicle/';

    var post = function(url, body){
      body = body || {};
      return $http.post(baseUrl+url, body);
    }
    var get = function(url){
      return $http.get(baseUrl+url);
    }

    return {
      regist : function(regist){
       return get('insertFormValues.php?name=' + regist.name + '&email=' + regist.email +  '&comment=' + regist.comment);
      }
    }
  });