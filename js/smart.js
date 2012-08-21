var round1_questions = [
	"Waar kikker je van op?",
	"Wat bevindt zich niet in de kelder van Dries?",
	"Wat kan Lian goed masseren?",
	"Als Dries gaat wakeboarden, gaat hij dan rechts of linksom?",
	"Bij wie gaan wel eens de lampjes uit?",
	"Hoe eindigt een voetbalfeestje voor Lian?",
	"Hoeveel kilogram scampis heeft Dries in Spa gegeten?",
	"Wat is volgens Dries altijd helemaal de max?",
	"Waar zat Dries altijd toen hij nog bij Rutten werkte?",
	"Hoeveel graden was het in de huiskamer tijdens het weekend in Spa?",
	"Hoe ziet Lian haar droom vakantieverblijf er uit?",
	"Hoe heet de minnaar van Lian?",
	"Wie drikt als Dries en Lian met de auto op stap zijn?",
	"Waar heeft Dries met moeite afstand van genomen sinds zijn relatie met Lian?",
	"In welk jaartal is de badkamer van Dries en Lian afgerond?"
];




function doRound1() {
	$("#question").html(round1_questions[i]);
}

$(document).ready(function(){
	var paused = true;
	
	
	$('#pause').click(function() {
		paused = !paused;
	});
	
	var driesCounter  = $("#dries_counter", window.parent.document);
	var lianCounter  = $("#lian_counter", window.parent.document);
	
	var refreshId = setInterval(function() {
	  var currentSecondsDries = driesCounter.text();
	  var currentSecondsLian = lianCounter.text();
	  if(currentSecondsDries == 0 ||currentSecondsLian == 0) {
	  } else {
		if (!paused) {
	      	driesCounter.html(currentSecondsDries-1);
			lianCounter.html(currentSecondsLian-1);
		}
      }
   }, 1000);
});
