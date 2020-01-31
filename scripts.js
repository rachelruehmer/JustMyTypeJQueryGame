let sentences = [
  'ten ate neite ate nee enet ite ate inet ent eate',
 'Too ato too nOt enot one totA not anot tOO aNot', 
 'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat',
   'nee ene ate ite tent tiet ent ine ene ete ene ate'
  ];

  let sentIndex = 0;
  let letterIndex = 0;
  let currentSentence = sentences[sentIndex];
  let currentLetter = currentSentence[letterIndex];

$("#sentence").text(currentSentence);
$("#target-letter").text(currentLetter);
$("#keyboard-upper-container").hide();

$(document).keydown(function (e) {
  if (e.keyCode === 16) {
    $("#keyboard-upper-container").show();
    $("#keyboard-lower-container").hide();
  }
});

$(document).keyup(function (e) {
  $('.highlight').removeClass('highlight');
  if (e.keyCode === 16) {
    $("#keyboard-upper-container").hide();
    $("#keyboard-lower-container").show();
  }
});

$(document).keypress(function (e) {
  console.log(letterIndex);
  console.log(currentSentence.length)
  $('#' + e.keyCode).addClass('highlight');
  if(currentSentence.charCodeAt(letterIndex) === e.keyCode) {
    $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    letterIndex++;
  
  $('#yellow-block').css('left', '+=17.5px');
  

 
 let currentLetter = currentSentence[letterIndex];
 $("#target-letter").text(currentLetter);
} else {
    $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
    alert('INCORRECT');

}



if (letterIndex == currentSentence.length) {
  letterIndex = 0
  sentIndex++
  console.log(sentIndex);
  $('#sentence').text(sentences[sentIndex]);
  $('#feedback').text('');
}


})
