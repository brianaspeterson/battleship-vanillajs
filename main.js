"use strict";

var colArrayOne =[];
var rowArrayOne = [];



function test(){
    var userOneInput = document.getElementById("userOneInput").value;
    for (var i=0; i<userOneInput.length; i++){
      rowArrayOne.push(userOneInput[i]);
      colArrayOne.push(i);
      rowArrayOne.push(userOneInput[i]+1);
      colArrayOne.push(i);
      rowArrayOne.push(userOneInput[i]+2);
      colArrayOne.push(i);
    }
    var userTwoInput = document.getElementById("userTwoInput").value;
    for (var j=0; i<userTwoInput.length; i++){
      rowArrayOne.push(userTwoInput[j]);
      colArrayOne.push(j);
      rowArrayOne.push(userTwoInput[j]+1);
      colArrayOne.push(j);
      rowArrayOne.push(userTwoInput[j]+2);
      colArrayOne.push(j);
    }
    
}

function begin(){
	$('#prompt').addClass("hidden");
	$('#tableBody').removeClass("hidden");
	$( "#tableBody" ).click(function(event) {
			//logic from notebook
  			$(event.target).addClass("selected");
});

}