// Put all your page JS here

$(function () {
  $.getJSON('js/quiz.json', function(data) {
    $('#slickQuiz').slickQuiz({json: data});
  });
});
