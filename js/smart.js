




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
