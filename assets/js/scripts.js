$(document).ready(function(){
	// Mobile Menu
	$('.bar').click(function(){
		$('.menu ul').slideToggle(500);

		return false
	});

	//logo Carousel
	$('.trusted_company_logo').owlCarousel({
		items:5,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		 
		responsive:{
			0:{
				items:1
			},
			300:{
				items:2
			},
			500:{
				items:3
			},
			767:{
				items:4
			},
			991:{
				items:5
			}
		}
	});





});

function team(evt, teamName) {
	var i, teamconttent, tablinks;
	teamconttent = document.getElementsByClassName("teamconttent");
	for (i = 0; i < teamconttent.length; i++) {
	  teamconttent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(teamName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  function work(evt, workname) {
	var i, workconttent, tablinks;
	workconttent = document.getElementsByClassName("workconttent");
	for (i = 0; i < workconttent.length; i++) {
	  workconttent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active2", "");
	}
	document.getElementById(workname).style.display = "block";
	evt.currentTarget.className += " active2";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultOpen2").click();
  function myFunction(x) {
	x.classList.toggle("change");
  }