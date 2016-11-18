// Put all your page JS here

$(function () {
  $.getJSON('http://skygate.qiniudn.com/js/quiz.json', function(data) {
    $('#slickQuiz').slickQuiz({json: data});
  });
});
