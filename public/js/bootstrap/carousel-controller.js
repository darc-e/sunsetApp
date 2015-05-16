angular.module('sunsetApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'images/slides/slide_1.jpg'},
        {
        image: 'images/slides/slide_2.jpg'},
        {
        image: 'images/slides/slide_3.jpg'},
        {
        image: 'images/slides/slide_4.jpg'},
        {
        image: 'images/slides/slide_5.jpg'},
        {
        image: 'images/slides/slide_6.jpg'},
        {
        image: 'images/slides/slide_7.jpg'},
        {
        image: 'images/slides/slide_8.jpg'
       });
      
    };
    for (var i=0; i<1; i++) {
     $scope.addSlide();
    }
  });