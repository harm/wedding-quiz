
function increase_counter(counter_id, numseconds) {
	console.log(numseconds);
	console.log(counter_id);
	var numsecs = parseInt($(counter_id).text());
	console.log(numsecs)	
	numsecs += numseconds;
	console.log(counter_id);
	$(counter_id).html(numsecs);
}

$(document).ready(function(){
	$('.score_button').click(function() {
		console.log(parent);
		increase_counter($('#dries_counter', parent), parseInt($(this).text()));
	});
});
