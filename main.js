$(document).ready(function() {

  var quotes = [{
    "quote": "I have an unfortunate personality.",
    "person": "Orson Welles"
  }, {
    "quote": "Beauty is a short-lived tyranny.",
    "person": "Socrates"
  }, {
    "quote": "Action expresses priorities.",
    "person": "Mahatma Gandhi"
  }, {
    "quote": "In fair weather prepare for foul.",
    "person": "Thomas Fuller"
  }, {
    "quote": "True friends stab you in the front.",
    "person": "Oscar Wilde"
  }, {
    "quote": "Big results require big ambitions.",
    "person": "Heraclitus"
  }, {
    "quote": "Education is the most powerful weapon which you can use to change the world.",
    "person": "Nelson Mandela"
  }, {
    "quote": "Education is not preparation for life; education is life itself.",
    "person": "John Dewey"
  }, {
    "quote": "Judge a man by his questions rather than his answers.",
    "person": "Voltaire"
  }, {
    "quote": "The old cathedrals are good, but the great blue dome that hangs over everything is better.",
    "person": "Thomas Carlyle"
  }, {
    "quote": "We are all in the gutter, but some of us are looking at the stars.",
    "person": "Oscar Wilde"
  }, {
    "quote": "In politics, stupidity is not a handicap.",
    "person": "Napoleon Bonaparte"
  }, {
    "quote": "There are no strangers here; only friends you haven't yet met.",
    "person": "William Butler Yeats"
  }, {
    "quote": "The greatest deception men suffer is from their own opinions.",
    "person": "Leonardo da Vinci"
  }];

  $("#doIt").click(function() {
    var number = Math.floor(Math.random() * quotes.length);
    var colorArr = "0123456789ABCDEF".split('');
    var color = "#";
    var color2 = "#";
    for (var i = 0; i < 6; i++) {
      var number2 = Math.floor(Math.random() * 16);
      color += colorArr[number2];
    }
    $("body").animate({
      backgroundColor: color
    }, 2000);
    $("#content").fadeOut(1000, function() {
      $("#content").html(quotes[number].quote).fadeIn(1000);
    });
    $("#author").fadeOut(1000, function() {
      $("#author").html(quotes[number].person).fadeIn(1000);
    });
  });
});

function tweetIt() {
  var phrase = document.getElementById("content").innerText;
  var author = document.getElementById("author").innerText
  var hashtag = "#FreeCodeCamp";
  var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(phrase) + " --" + encodeURIComponent(author) + " " + encodeURIComponent(hashtag);
  window.open(tweetUrl);
}