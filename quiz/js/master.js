// Put all your page JS here

$(function () {
  $.getJSON('quiz.json', function(data) {
    $('#slickQuiz').slickQuiz({json: data});
  });
});
