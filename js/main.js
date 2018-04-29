$( document ).ready(function() {
$('#token-bttn').on("click",function(){
	$('#diagram-text').html( " <h1>75<sup>%</sup></h1><p>Token Sale</p> ");
	$('#diagram-text').css({"left": "24%", "top" : "17%"});
	$('#Path_405').addClass('active');
	$('#Path_402').removeClass('active');
	$('#Path_403').removeClass('active');
	$('#Path_404').removeClass('active');
	$('#Path_406').removeClass('active');
	$('#token-bttn').addClass('active-bttn');
	$('#team-bttn').removeClass('active-bttn');
	$('#partner-bttn').removeClass('active-bttn');
	$('#investor-bttn').removeClass('active-bttn');
	$('#bounty-bttn').removeClass('active-bttn');

});

$('#team-bttn').on("click",function(){
	$('#diagram-text').html( " <h1>8<sup>%</sup></h1><p>Team</p> ");
	$('#diagram-text').css({"left": "34%", "top" : "17%"});
	$('#Path_404').addClass('active');
	$('#Path_402').removeClass('active');
	$('#Path_403').removeClass('active');
	$('#Path_405').removeClass('active');
	$('#Path_406').removeClass('active');
	$('#token-bttn').removeClass('active-bttn');
	$('#team-bttn').addClass('active-bttn');
	$('#partner-bttn').removeClass('active-bttn');
	$('#investor-bttn').removeClass('active-bttn');
	$('#bounty-bttn').removeClass('active-bttn');
});

$('#partner-bttn').on("click",function(){
	$('#diagram-text').html( " <h1>3<sup>%</sup></h1><p>Partners & Advisors</p> ");
	$('#diagram-text').css({"left": "29%", "top" : "8%"});
	$('#Path_403').addClass('active');
	$('#Path_402').removeClass('active');
	$('#Path_404').removeClass('active');
	$('#Path_405').removeClass('active');
	$('#Path_406').removeClass('active');
	$('#token-bttn').removeClass('active-bttn');
	$('#team-bttn').removeClass('active-bttn');
	$('#partner-bttn').addClass('active-bttn');
	$('#investor-bttn').removeClass('active-bttn');
	$('#bounty-bttn').removeClass('active-bttn');

});

$('#investor-bttn').on("click",function(){
	$('#diagram-text').html( " <h1>3<sup>%</sup></h1><p>Early<br> Investors</p> ");
	$('#diagram-text').css({"left": "29%", "top" : "8%"});
	$('#Path_402').addClass('active');
	$('#Path_403').removeClass('active');
	$('#Path_404').removeClass('active');
	$('#Path_405').removeClass('active');
	$('#Path_406').removeClass('active');
	$('#token-bttn').removeClass('active-bttn');
	$('#team-bttn').removeClass('active-bttn');
	$('#partner-bttn').removeClass('active-bttn');
	$('#investor-bttn').addClass('active-bttn');
	$('#bounty-bttn').removeClass('active-bttn');
});

	$('#bounty-bttn').on("click",function(){
	$('#diagram-text').html( " <h1>1<sup>%</sup></h1><p>Bounty</p> ");
	$('#diagram-text').css({"left": "33%", "top" : "17%"});
	$('#Path_406').addClass('active');
	$('#Path_403').removeClass('active');
	$('#Path_404').removeClass('active');
	$('#Path_405').removeClass('active');
	$('#Path_402').removeClass('active');
	$('#token-bttn').removeClass('active-bttn');
	$('#team-bttn').removeClass('active-bttn');
	$('#partner-bttn').removeClass('active-bttn');
	$('#investor-bttn').removeClass('active-bttn');
	$('#bounty-bttn').addClass('active-bttn');
});
$('.show-team-bttn').on("click", function(){
	$('.show-team-bttn').fadeOut(100);
	$('.team-bttn-div').addClass('hidden-bttn');
	$("#hidden-team").fadeIn(500);
});

$(window).scroll(function(){
	var offset = $('.roadmap-svg').offset();
	var offsetTop =offset.top-600;
  	if ($(this).scrollTop() > offsetTop ) {
  		startAnimation();
		
		

  	}
});


    	
    	function startAnimation() {
		  $('.roadmap-3').animate({
   			 opacity: '1'}, 300,function(){
   			 	$('.roadmap-1').animate({opacity: '1'},400,function(){
   			 		$('#Ellipse_446').animate({opacity: '1'},600);
					$('#_2012_August_').animate({opacity: '1'},600);
					$('#2012_text').animate({opacity: '1'},600,function(){
						$('#Path_327').animate({opacity: '1'},600);
						$('#_2017_November_').animate({opacity: '1'},600);
						$('#2017_text').animate({opacity: '1'},600,function(){
							$('#Path_328').animate({opacity: '1'},600);
							$('#_2018_January_').animate({opacity: '1'},600);
							$('#2018_text').animate({opacity: '1'},600,function(){
								$('#Path_329').animate({opacity: '1'},600);
								$('#_2018_February').animate({opacity: '1'},600);
								$('#2018_f_text').animate({opacity: '1'},600,function(){
									$('#Path_330').animate({opacity: '1'},600);
									$('#_2018_April').animate({opacity: '1'},600);
									$('#2018_a_text').animate({opacity: '1'},600,function(){
										$('#Path_331').animate({opacity: '1'},600);
										$('#_2018_February-2').animate({opacity: '1'},600);
										$('#2018_f_text-2').animate({opacity: '1'},600,function(){
											$('#Path_332').animate({opacity: '1'},600);
											$('#_2018_May').animate({opacity: '1'},600);
											$('#2018_m_text').animate({opacity: '1'},600,function(){
												$('#Path_333').animate({opacity: '1'},600);
												$('#_2018_June').animate({opacity: '1'},600);
												$('#2018_j_text').animate({opacity: '1'},600,function(){
													$('#Path_334').animate({opacity: '1'},600);
													$('#_2018_July').animate({opacity: '1'},600);
													$('#2018_jl_text').animate({opacity: '1'},600,function(){
														$('#Path_326').animate({opacity: '1'},400,function(){
														})
													})
												})
											})
										})
									})
								})
							})
						})							
					})
   			 	})
   			 });

		  }
});
		


