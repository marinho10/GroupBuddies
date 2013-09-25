//function loading with 4000ms 
//Function to hide the loading div
function loadingDivHide()
{
  setTimeout(function(){
  document.getElementById("loading_div").style.display = "none";
  document.getElementById("wrapper").style.display = "";
  },4000);
}
/* ----------------- DO NOT CHANGE ----------------- */

$(document).ready(function() {	
	
	function replace_anchor() {		
		document.location.hash = "start";	
	};	
	
	var hello_anchor = document.location.hash.replace('#','');
	
	function check_if_project_anchor() {	
		var is_project = null;
		
		$('.text-container').each(function(i) {			
			var project_anchor = $(this).attr("id");
			
			if (project_anchor == hello_anchor) { 
				is_project = true;								
				return false;
			}										
		 });
		 
		 if (is_project == null) { 
		 	replace_anchor();	
		 }		
	};
	
/* ------------------------------------------------- */	
	
	if (hello_anchor == "nuno") { 
		$("#intro-headline").html("Hello Nuno, ready to go… Welcome to your new website. We hope you like it.");			
		replace_anchor();
	}	
	
/* ----------------- DO NOT CHANGE ----------------- */

	else{		
		check_if_project_anchor();		
	}
});

/* ------------------------------------------------- */	
