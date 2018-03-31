const app=angular.module('formdetail',[]);

app.controller('formDetailCtrl',function($scope){
    $scope.formModel ={};

    $scope.onSubmit=function(){
        console.log("submitted");
        console.log($scope.formModel);
    };
})