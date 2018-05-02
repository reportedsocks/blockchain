$( document ).ready(function() {
$("body").niceScroll({
	zindex:'999999',
	cursorcolor:"#FA940A",
	cursorwidth:"15px",
	background:"rgba(0,99,174,.6)",
	cursorborder:"none"
});


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
	$('#diagram-text').html( " <h1>15<sup>%</sup></h1><p>Team</p> ");
	$('#diagram-text').css({"left": "30%", "top" : "17%"});
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
	$('#diagram-text').html( " <h1>4<sup>%</sup></h1><p>Partners & Advisors</p> ");
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
	$('#diagram-text').html( " <h1>5<sup>%</sup></h1><p>Early<br> Investors</p> ");
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
    	$('.roadmap-9').addClass('animated-dot');
  		$('.roadmap-9').animate({opacity: '1'},600,function(){
  			$('#heading-1').attr('transform', 'scale(1) translate(1034 7517)');
  			$('#text-1').attr('transform', 'scale(1) translate(1034 7527)');
			$('#heading-1').animate({fontSize: '16px'},1000);
			$('#text-1').animate({fontSize: '16px'},1000);
			$('#line-1').animate({opacity: '1'},1000);
			$('#line-1').addClass('animated');
			$('#circle-1').animate({opacity: '1'},500,function(){
				$('#heading-2').attr('transform', 'scale(1) translate(878 7607)');
  				$('#text-2').attr('transform', 'scale(1) translate(578 7617)');
				$('#heading-2').animate({fontSize: '16px'},1000);
				$('#text-2').animate({fontSize: '16px'},1000);
				$('#s-line-2').animate({opacity: '1'},1000);
				$('#s-line-2').addClass('animated');
				$('#circle-2').animate({opacity: '1'},500,function(){
					$('#heading-3').attr('transform', 'scale(1) translate(1034 7692)');
  					$('#text-3').attr('transform', 'scale(1) translate(1034 7702)');
					$('#heading-3').animate({fontSize: '16px'},1000);
					$('#text-3').animate({fontSize: '16px'},1000);
					$('#s-line-3').animate({opacity: '1'},1000);
					$('#s-line-3').addClass('animated');
					$('#circle-3').animate({opacity: '1'},500,function(){
						$('#heading-4').attr('transform', 'scale(1) translate(719 7795)');
  						$('#text-4').attr('transform', 'scale(1) translate(578 7820)');
						$('#heading-4').animate({fontSize: '16px'},1000);
						$('#text-4').animate({fontSize: '16px'},1000);
						$('#s-line-4').animate({opacity: '1'},1000);
						$('#s-line-4').addClass('animated');
						$('#circle-4').animate({opacity: '1'},500,function(){
							$('#heading-5').attr('transform', 'scale(1) translate(1034 7871)');
  							$('#text-5').attr('transform', 'scale(1) translate(1034 7881)');
							$('#heading-5').animate({fontSize: '16px'},1000);
							$('#text-5').animate({fontSize: '16px'},1000);
							$('#s-line-5').animate({opacity: '1'},1000);
							$('#s-line-5').addClass('animated');
							$('#circle-5').animate({opacity: '1'},500,function(){
								$('#heading-6').attr('transform', 'scale(1) translate(739 7981)');
  								$('#text-6').attr('transform', 'scale(1) translate(578 8006)');
								$('#heading-6').animate({fontSize: '16px'},1000);
								$('#text-6').animate({fontSize: '16px'},1000);
								$('#s-line-6').animate({opacity: '1'},1000);
								$('#s-line-6').addClass('animated');
								$('#circle-6').animate({opacity: '1'},500,function(){
									$('#heading-7').attr('transform', 'scale(1) translate(1034 8066)');
  									$('#text-7').attr('transform', 'scale(1) translate(1034 8076)');
									$('#heading-7').animate({fontSize: '16px'},1000);
									$('#text-7').animate({fontSize: '16px'},1000);
									$('#s-line-7').animate({opacity: '1'},1000);
									$('#s-line-7').addClass('animated');
									$('#circle-7').animate({opacity: '1'},500,function(){
										$('#heading-8').attr('transform', 'scale(1) translate(739 8158)');
  										$('#text-8').attr('transform', 'scale(1) translate(578 8183)');
										$('#heading-8').animate({fontSize: '16px'},1000);
										$('#text-8').animate({fontSize: '16px'},1000);
										$('#s-line-8').animate({opacity: '1'},1000);
										$('#s-line-8').addClass('animated');
										$('#circle-8').animate({opacity: '1'},500,function(){
											$('#heading-9').attr('transform', 'scale(1) translate(1034 8270)');
  											$('#text-9').attr('transform', 'scale(1) translate(1034 8280)');
											$('#heading-9').animate({fontSize: '16px'},1000);
											$('#text-9').animate({fontSize: '16px'},1000);
											$('#s-line-9').animate({opacity: '1'},1000);
											$('#s-line-9').addClass('animated');
											$('#circle-9').animate({opacity: '1'},500,function(){
												$('#s-line-10').animate({opacity: '1'},1000);
												$('#s-line-10').addClass('animated');
												$('#end-pointer').animate({opacity: '1'},800,);
											});
										});
									});
								});
							});
						});
					});
				});
			});
  		});
	};



	$( "#content-1" ).hover(
  function() {
  	
    $('#heading-1').addClass( "hover" );
    $('#text-1').addClass( "hover" );
  }, function() {
    $('#heading-1').removeClass( "hover" );
    $('#text-1').removeClass( "hover" );

  }
  );

	$( "#content-2" ).hover(
  function() {
  	
    $('#heading-2').addClass( "hover" );
    $('#text-2').addClass( "hover" );
  }, function() {
    $('#heading-2').removeClass( "hover" );
    $('#text-2').removeClass( "hover" );

  }
  );

	$( "#content-3" ).hover(
  function() {
  	
    $('#heading-3').addClass( "hover" );
    $('#text-3').addClass( "hover" );
  }, function() {
    $('#heading-3').removeClass( "hover" );
    $('#text-3').removeClass( "hover" );

  }
  );

	$( "#content-4" ).hover(
  function() {
  	
    $('#heading-4').addClass( "hover" );
    $('#text-4').addClass( "hover" );
  }, function() {
    $('#heading-4').removeClass( "hover" );
    $('#text-4').removeClass( "hover" );

  }
  );

	$( "#content-5" ).hover(
  function() {
  	
    $('#heading-5').addClass( "hover" );
    $('#text-5').addClass( "hover" );
  }, function() {
    $('#heading-5').removeClass( "hover" );
    $('#text-5').removeClass( "hover" );

  }
  );
	$( "#content-6" ).hover(
  function() {
  	
    $('#heading-6').addClass( "hover" );
    $('#text-6').addClass( "hover" );
  }, function() {
    $('#heading-6').removeClass( "hover" );
    $('#text-6').removeClass( "hover" );

  }
  );
	$( "#content-7" ).hover(
  function() {
  	
    $('#heading-7').addClass( "hover" );
    $('#text-7').addClass( "hover" );
  }, function() {
    $('#heading-7').removeClass( "hover" );
    $('#text-7').removeClass( "hover" );

  }
  );
	$( "#content-8" ).hover(
  function() {
  	
    $('#heading-8').addClass( "hover" );
    $('#text-8').addClass( "hover" );
  }, function() {
    $('#heading-8').removeClass( "hover" );
    $('#text-8').removeClass( "hover" );

  }
  );
	$( "#content-9" ).hover(
  function() {
  	
    $('#heading-9').addClass( "hover" );
    $('#text-9').addClass( "hover" );
  }, function() {
    $('#heading-9').removeClass( "hover" );
    $('#text-9').removeClass( "hover" );

  }
  );
						$( "#content-1" ).hover(
  function() {
  	
    $('#heading-1').addClass( "hover" );
    $('#text-1').addClass( "hover" );
  }, function() {
    $('#heading-1').removeClass( "hover" );
    $('#text-1').removeClass( "hover" );

  }
  );

	$.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new after">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){
     $(el).animate({opacity: '1'},20,function(){
     	$(el).removeClass('after');
     });

     }, 15 * i);
   });
  });

 };

 $(window).scroll(function(){
	var offset = $('.contract-block').offset();
	var offsetTop =offset.top-600;
  	if ($(this).scrollTop() > offsetTop ) {
 	$('.contract-row').show();
 		$('.contract-row').animate_Text();
 		$('.contract-row').animate({opacity: '1'},9000,function(){
 			$('.contract-row-2').css('opacity','1');
 		});
		$(window).off('scroll');
  	}	  
});


 $('.token-mnr-bttn').on('click', function(){
 	$('.token-author-div').fadeOut(0);
 	$('.token-miner-div').fadeIn(100);
 	$('.token-crt-bttn').removeClass('token-focused');
 	$('.token-mnr-bttn').addClass('token-focused');

 });

  $('.token-crt-bttn').on('click', function(){
 	$('.token-miner-div').fadeOut(0);
 	$('.token-author-div').fadeIn(100);
 	$('.token-crt-bttn').addClass('token-focused');
 	$('.token-mnr-bttn').removeClass('token-focused');

 });
  $(window).on('scroll',function(){
  	
  	$('.fixed-header').addClass('blue');
  	$('.fixed-header').addClass('showed');
  	$('.viget-telegram').removeClass('d-none');
  	$('.header-tel-icon').addClass('d-none');
  	$('.header-menu-icon').addClass('offset-4');
  });
  var menuCounter = 0;

  $('.header-menu-icon').on('click',function(){
  	if(menuCounter%2==0){
  		$('.fixed-header').removeClass('blue');
  	$('.hidden-menu').fadeIn(400);
  	$('.header-menu-icon').html('<img src="img/Close.svg">');
  	$('.fixed-header').addClass('bg-linear');
  	menuCounter++;
  }else{
  	$('.hidden-menu').fadeOut(50);
  	$('.header-menu-icon').html('<img src="img/menu-icon.svg">');
  	$('.fixed-header').removeClass('bg-linear');
  	menuCounter++;
  }
  });
  $('.menu-button').on('click',function(){
  	$('.hidden-menu').fadeOut(50);
  	$('.header-menu-icon').html('<img src="img/menu-icon.svg">');
  	$('.fixed-header').removeClass('bg-linear');
  	menuCounter++;
  });

 });
	

 

		


