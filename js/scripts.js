$(document).ready(function() {
  $("#send-letter form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $(".letter").show();

    event.preventDefault();
  });

  $("#sentence-to-uppercase form").submit(function(event) {
    var sentence = $("input#sentence").val();

    var sentenceUppercase = sentence.toUpperCase();

    $(".sentence-uppercase").text(sentenceUppercase);

    $(".uppercase").show();

    event.preventDefault();
  });

});
