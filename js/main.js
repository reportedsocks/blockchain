if (/ip(hone|od)|ipad/i.test(navigator.userAgent)) {
           $("body").css ("cursor", "pointer");
        }
$( document ).ready(function() {

//pre-load icons

//switch percantage in distribution block
var groupToRemove;
$('#token-bttn').on("click",function(){
	if($(window).width() <= '1200'){
			$('#diagram-text').html( " <h1>75<sup>%</sup></h1><p>Token Sale</p> ");
			$('#diagram-text').css({"left": "25%", "top" : "20%"});
		}else{
			$('#diagram-text').html( " <h1>75<sup>%</sup></h1><p>Token Sale</p> ");
			$('#diagram-text').css({"left": "30%", "top" : "25%"});
		}

	groupToRemove =$('#Group_349')
	groupToRemove.addClass('hidden-diagram-bar');
	groupToRemove.remove();
	$('#distribution-diagram').append(groupToRemove)
	groupToRemove.fadeIn(0);

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
	if($(window).width() <= '1200'){
			$('#diagram-text').html( " <h1>15<sup>%</sup></h1><p>Team</p> ");
			$('#diagram-text').css({"left": "25%", "top" : "20%"});
		}else{
			$('#diagram-text').html( " <h1>15<sup>%</sup></h1><p>Team</p> ");
			$('#diagram-text').css({"left": "33%", "top" : "26%"});
		}
	groupToRemove =$('#Group_348')
	groupToRemove.addClass('hidden-diagram-bar');
	groupToRemove.remove();
	$('#distribution-diagram').append(groupToRemove)
	groupToRemove.fadeIn(0);

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
	if($(window).width() <= '992'){
			$('#diagram-text').html( " <h1>4<sup>%</sup></h1><p>Partners<br> & Advisors</p> ");
			$('#diagram-text').css({"left": "27%", "top" : "3%"});
		}else{
			$('#diagram-text').html( " <h1>4<sup>%</sup></h1><p>Partners<br> & Advisors</p> ");
			$('#diagram-text').css({"left": "33%", "top" : "20%"});
		}
	groupToRemove =$('#Group_347')
	groupToRemove.addClass('hidden-diagram-bar');
	groupToRemove.remove();
	$('#distribution-diagram').append(groupToRemove)
	groupToRemove.fadeIn(0);
	
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
	if($(window).width() <= '992'){
			$('#diagram-text').html( " <h1>5<sup>%</sup></h1><p>Early<br> Investors</p> ");
			$('#diagram-text').css({"left": "30%", "top" : "5%"});
		}else{
			$('#diagram-text').html( " <h1>5<sup>%</sup></h1><p>Early<br> Investors</p> ");
			$('#diagram-text').css({"left": "35%", "top" : "20%"});
		}
	groupToRemove =$('#Group_346')
	groupToRemove.addClass('hidden-diagram-bar');
	groupToRemove.remove();
	$('#distribution-diagram').append(groupToRemove)
	groupToRemove.fadeIn(0);

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
		if($(window).width() <= '992'){
			$('#diagram-text').html( " <h1>1<sup>%</sup></h1><p>Bounty</p> ");
			$('#diagram-text').css({"left": "32%", "top" : "15%"});
		}else{
			$('#diagram-text').html( " <h1>1<sup>%</sup></h1><p>Bounty</p> ");
			$('#diagram-text').css({"left": "38%", "top" : "25%"});
		}
	groupToRemove =$('#Group_350')
	groupToRemove.addClass('hidden-diagram-bar');
	groupToRemove.remove();
	$('#distribution-diagram').append(groupToRemove)
	groupToRemove.fadeIn(0);
	
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
// start roadmap animation
$(window).scroll(function(){
	var offset = $('.roadmap-svg').offset();
	var offsetTop =offset.top-600;
  	if ($(this).scrollTop() > offsetTop ) {
  		startAnimation();
  		$(window).off('scroll');
  	}
  	
});


// roadmap animation function    	
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


$('#roadmap-bttn').on('click',function(){
		if($(window).width() <= '768'){
			$('.roadmap-sm-container').html('<img src="img/roadmap-sm-2.svg">');
			$('#roadmap-bttn').addClass('d-none');
		}else{
			$('#end-pointer').animate({opacity: '0'},0,);
			$('.roadmap-svg-2').removeClass('d-none');

			$('#heading-11').attr('transform', 'scale(1) translate(739 8158)');
  			$('#text-11').attr('transform', 'scale(1) translate(578 8183)');
			$('#heading-11').animate({fontSize: '16px'},1000);
			$('#text-11').animate({fontSize: '16px'},1000);
			$('#line-11').animate({opacity: '1'},1000);
			$('#line-11').addClass('animated');
			$('#circle-11').animate({opacity: '1'},500,function(){
				$('#heading-12').attr('transform', 'scale(1) translate(1034 8270)');
  				$('#text-12').attr('transform', 'scale(1) translate(1034 8280)');
				$('#heading-12').animate({fontSize: '16px'},1000);
				$('#text-12').animate({fontSize: '16px'},1000);
				$('#s-line-12').animate({opacity: '1'},1000);
				$('#s-line-12').addClass('animated');
				$('#circle-12').animate({opacity: '1'},500,function(){
					$('#heading-13').attr('transform', 'scale(1) translate(739 8158)');
  					$('#text-13').attr('transform', 'scale(1) translate(537 8183)');
					$('#heading-13').animate({fontSize: '16px'},1000);
					$('#text-13').animate({fontSize: '16px'},1000);
					$('#s-line-13').animate({opacity: '1'},1000);
					$('#s-line-13').addClass('animated');
					$('#circle-13').animate({opacity: '1'},500,function(){
						$('#heading-14').attr('transform', 'scale(1) translate(1034 8270)');
  						$('#text-14').attr('transform', 'scale(1) translate(1034 8280)');
						$('#heading-14').animate({fontSize: '16px'},1000);
						$('#text-14').animate({fontSize: '16px'},1000);
						$('#s-line-14').animate({opacity: '1'},1000);
						$('#s-line-14').addClass('animated');
						$('#circle-14').animate({opacity: '1'},500,function(){
							$('#heading-15').attr('transform', 'scale(1) translate(739 8158)');
  							$('#text-15').attr('transform', 'scale(1) translate(445 8183)');
							$('#heading-15').animate({fontSize: '16px'},1000);
							$('#text-15').animate({fontSize: '16px'},1000);
							$('#s-line-15').animate({opacity: '1'},1000);
							$('#s-line-15').addClass('animated');
							$('#circle-15').animate({opacity: '1'},500,function(){
								$('#heading-16').attr('transform', 'scale(1) translate(1034 8270)');
  								$('#text-16').attr('transform', 'scale(1) translate(1034 8280)');
								$('#heading-16').animate({fontSize: '16px'},1000);
								$('#text-16').animate({fontSize: '16px'},1000);
								$('#s-line-16').animate({opacity: '1'},1000);
								$('#s-line-16').addClass('animated');
								$('#circle-16').animate({opacity: '1'},500,function(){
									$('#heading-17').attr('transform', 'scale(1) translate(739 8158)');
  									$('#text-17').attr('transform', 'scale(1) translate(578 8183)');
									$('#heading-17').animate({fontSize: '16px'},1000);
									$('#text-17').animate({fontSize: '16px'},1000);
									$('#s-line-17').animate({opacity: '1'},1000);
									$('#s-line-17').addClass('animated');
									$('#circle-17').animate({opacity: '1'},500,function(){
										$('#heading-18').attr('transform', 'scale(1) translate(1034 8270)');
  										$('#text-18').attr('transform', 'scale(1) translate(1034 8280)');
										$('#heading-18').animate({fontSize: '16px'},1000);
										$('#text-18').animate({fontSize: '16px'},1000);
										$('#s-line-18').animate({opacity: '1'},1000);
										$('#s-line-18').addClass('animated');
										$('#circle-18').animate({opacity: '1'},500,function(){
											$('#heading-19').attr('transform', 'scale(1) translate(739 8158)');
  											$('#text-19').attr('transform', 'scale(1) translate(563 8183)');
											$('#heading-19').animate({fontSize: '16px'},1000);
											$('#text-19').animate({fontSize: '16px'},1000);
											$('#s-line-19').animate({opacity: '1'},1000);
											$('#s-line-19').addClass('animated');
											$('#circle-19').animate({opacity: '1'},500,function(){
												$('#s-line-20').animate({opacity: '1'},1000);
												$('#s-line-20').addClass('animated');
												$('#end-pointer-2').animate({opacity: '1'},800,);
											});
										});
									});
								});
							});
						});
					});
				});
			});
			$('#roadmap-bttn').addClass('d-none');
			$('.roadmap-container').css({paddingBottom: "10px"});
		}
	});

// smart contract animation function
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
// start smart contract animation
var scrollOff =false;
 window.onscroll=function(){
 	if(scrollOff){return 0;};
	var offset = $('.contract-block').offset();
	var offsetTop =offset.top-600;
  	if ($(this).scrollTop() > offsetTop ) {
		$('.contract-row').show();
 		$('.contract-row').animate_Text();
 		$('.contract-row').animate({opacity: '1'},9000,function(){
 			$('.contract-row-2').css('opacity','1');
 		});
 		//highlight text
 		$('.new:nth-child(1)').addClass('span-red');
 		$('.new:nth-child(2)').addClass('span-red');
 		$('.new:nth-child(3)').addClass('span-red');
 		$('.new:nth-child(4)').addClass('span-red');
 		$('.new:nth-child(5)').addClass('span-red');
 		$('.new:nth-child(6)').addClass('span-red');

 		$('.new:nth-child(17)').addClass('span-prpl');
 		$('.new:nth-child(19)').addClass('span-prpl');
 		$('.new:nth-child(21)').addClass('span-prpl');
 		$('.new:nth-child(22)').addClass('span-prpl');

 		
 		$('.new:nth-child(24)').addClass('span-red');
 		$('.new:nth-child(25)').addClass('span-red');
 		$('.new:nth-child(26)').addClass('span-red');
 		$('.new:nth-child(27)').addClass('span-red');
 		$('.new:nth-child(28)').addClass('span-red');
 		$('.new:nth-child(29)').addClass('span-red');

 		$('.new:nth-child(31)').addClass('span-yellow');
 		$('.new:nth-child(32)').addClass('span-yellow');
 		$('.new:nth-child(33)').addClass('span-yellow');
 		$('.new:nth-child(34)').addClass('span-yellow');
 		$('.new:nth-child(35)').addClass('span-yellow');
 		$('.new:nth-child(36)').addClass('span-yellow');
 		$('.new:nth-child(37)').addClass('span-yellow');
 		$('.new:nth-child(38)').addClass('span-yellow');
 		$('.new:nth-child(39)').addClass('span-yellow');
 		$('.new:nth-child(40)').addClass('span-yellow');
 		$('.new:nth-child(41)').addClass('span-yellow');
 		$('.new:nth-child(42)').addClass('span-yellow');
 		$('.new:nth-child(43)').addClass('span-yellow');
 		$('.new:nth-child(44)').addClass('span-yellow');
 		$('.new:nth-child(45)').addClass('span-yellow');
 		$('.new:nth-child(46)').addClass('span-yellow');
 		$('.new:nth-child(47)').addClass('span-yellow');
 		$('.new:nth-child(48)').addClass('span-yellow');
 		$('.new:nth-child(49)').addClass('span-yellow');
 		$('.new:nth-child(50)').addClass('span-yellow');
 		$('.new:nth-child(51)').addClass('span-yellow');
 		$('.new:nth-child(52)').addClass('span-yellow');
 		$('.new:nth-child(53)').addClass('span-yellow');
 		$('.new:nth-child(54)').addClass('span-yellow');
 		$('.new:nth-child(55)').addClass('span-yellow');

 		$('.new:nth-child(57)').addClass('span-red');
 		$('.new:nth-child(58)').addClass('span-red');
 		$('.new:nth-child(59)').addClass('span-red');
 		$('.new:nth-child(60)').addClass('span-red');
 		$('.new:nth-child(61)').addClass('span-red');
 		$('.new:nth-child(62)').addClass('span-red');

 		$('.new:nth-child(64)').addClass('span-yellow');
 		$('.new:nth-child(65)').addClass('span-yellow');
 		$('.new:nth-child(66)').addClass('span-yellow');
 		$('.new:nth-child(67)').addClass('span-yellow');
 		$('.new:nth-child(68)').addClass('span-yellow');
 		$('.new:nth-child(69)').addClass('span-yellow');
 		$('.new:nth-child(70)').addClass('span-yellow');
 		$('.new:nth-child(71)').addClass('span-yellow');
 		$('.new:nth-child(72)').addClass('span-yellow');
 		$('.new:nth-child(73)').addClass('span-yellow');
 		$('.new:nth-child(74)').addClass('span-yellow');
 		$('.new:nth-child(75)').addClass('span-yellow');
 		$('.new:nth-child(76)').addClass('span-yellow');
 		$('.new:nth-child(77)').addClass('span-yellow');
 		$('.new:nth-child(78)').addClass('span-yellow');
 		$('.new:nth-child(79)').addClass('span-yellow');
 		$('.new:nth-child(80)').addClass('span-yellow');
 		$('.new:nth-child(81)').addClass('span-yellow');
 		$('.new:nth-child(82)').addClass('span-yellow');
 		$('.new:nth-child(83)').addClass('span-yellow');
 		$('.new:nth-child(84)').addClass('span-yellow');
 		$('.new:nth-child(85)').addClass('span-yellow');
 		$('.new:nth-child(86)').addClass('span-yellow');
 		$('.new:nth-child(87)').addClass('span-yellow');
 		$('.new:nth-child(88)').addClass('span-yellow');
 		
 		$('.new:nth-child(90)').addClass('span-red');
 		$('.new:nth-child(91)').addClass('span-red');
 		$('.new:nth-child(92)').addClass('span-red');
 		$('.new:nth-child(93)').addClass('span-red');
 		$('.new:nth-child(94)').addClass('span-red');
 		$('.new:nth-child(95)').addClass('span-red');

 		$('.new:nth-child(97)').addClass('span-yellow');
 		$('.new:nth-child(98)').addClass('span-yellow');
 		$('.new:nth-child(99)').addClass('span-yellow');
 		$('.new:nth-child(100)').addClass('span-yellow');
 		$('.new:nth-child(101)').addClass('span-yellow');
 		$('.new:nth-child(102)').addClass('span-yellow');
 		$('.new:nth-child(103)').addClass('span-yellow');
 		$('.new:nth-child(104)').addClass('span-yellow');
 		$('.new:nth-child(105)').addClass('span-yellow');
 		$('.new:nth-child(106)').addClass('span-yellow');
 		$('.new:nth-child(107)').addClass('span-yellow');
 		$('.new:nth-child(108)').addClass('span-yellow');
 		$('.new:nth-child(109)').addClass('span-yellow');
 		$('.new:nth-child(110)').addClass('span-yellow');
 		$('.new:nth-child(111)').addClass('span-yellow');
 		$('.new:nth-child(112)').addClass('span-yellow');
 		$('.new:nth-child(113)').addClass('span-yellow');
 		$('.new:nth-child(114)').addClass('span-yellow');
 		$('.new:nth-child(115)').addClass('span-yellow');
 		$('.new:nth-child(116)').addClass('span-yellow');
 		$('.new:nth-child(117)').addClass('span-yellow');
 		$('.new:nth-child(118)').addClass('span-yellow');
 		$('.new:nth-child(119)').addClass('span-yellow');
 		$('.new:nth-child(120)').addClass('span-yellow');
 		$('.new:nth-child(121)').addClass('span-yellow');
 		$('.new:nth-child(122)').addClass('span-yellow');
 		$('.new:nth-child(123)').addClass('span-yellow');
 		$('.new:nth-child(124)').addClass('span-yellow');
 		$('.new:nth-child(125)').addClass('span-yellow');
 		$('.new:nth-child(126)').addClass('span-yellow');
 		$('.new:nth-child(127)').addClass('span-yellow');
 		$('.new:nth-child(128)').addClass('span-yellow');
 		$('.new:nth-child(129)').addClass('span-yellow');
 		$('.new:nth-child(130)').addClass('span-yellow');
 		$('.new:nth-child(131)').addClass('span-yellow');
 		$('.new:nth-child(132)').addClass('span-yellow');
 		$('.new:nth-child(133)').addClass('span-yellow');
 		$('.new:nth-child(134)').addClass('span-yellow');
 		$('.new:nth-child(135)').addClass('span-yellow');
 		$('.new:nth-child(136)').addClass('span-yellow');
 		$('.new:nth-child(137)').addClass('span-yellow');
 		$('.new:nth-child(138)').addClass('span-yellow');
 		$('.new:nth-child(139)').addClass('span-yellow');
 		$('.new:nth-child(140)').addClass('span-yellow');
 		$('.new:nth-child(141)').addClass('span-yellow');
 		$('.new:nth-child(142)').addClass('span-yellow');
 		$('.new:nth-child(143)').addClass('span-yellow');
 		$('.new:nth-child(144)').addClass('span-yellow');
 		$('.new:nth-child(145)').addClass('span-yellow');

 		$('.new:nth-child(147)').addClass('span-red');
 		$('.new:nth-child(148)').addClass('span-red');
 		$('.new:nth-child(149)').addClass('span-red');
 		$('.new:nth-child(150)').addClass('span-red');
 		$('.new:nth-child(151)').addClass('span-red');
 		$('.new:nth-child(152)').addClass('span-red');

 		$('.new:nth-child(154)').addClass('span-yellow');
 		$('.new:nth-child(155)').addClass('span-yellow');
 		$('.new:nth-child(156)').addClass('span-yellow');
 		$('.new:nth-child(157)').addClass('span-yellow');
 		$('.new:nth-child(158)').addClass('span-yellow');
 		$('.new:nth-child(159)').addClass('span-yellow');
 		$('.new:nth-child(160)').addClass('span-yellow');
 		$('.new:nth-child(161)').addClass('span-yellow');
 		$('.new:nth-child(162)').addClass('span-yellow');
 		$('.new:nth-child(163)').addClass('span-yellow');
 		$('.new:nth-child(164)').addClass('span-yellow');
 		$('.new:nth-child(165)').addClass('span-yellow');
 		$('.new:nth-child(166)').addClass('span-yellow');
 		$('.new:nth-child(167)').addClass('span-yellow');
 		$('.new:nth-child(168)').addClass('span-yellow');
 		$('.new:nth-child(169)').addClass('span-yellow');
 		$('.new:nth-child(170)').addClass('span-yellow');
 		$('.new:nth-child(171)').addClass('span-yellow');
 		$('.new:nth-child(172)').addClass('span-yellow');
 		$('.new:nth-child(173)').addClass('span-yellow');
 		$('.new:nth-child(174)').addClass('span-yellow');
 		$('.new:nth-child(175)').addClass('span-yellow');
 		$('.new:nth-child(176)').addClass('span-yellow');
 		$('.new:nth-child(177)').addClass('span-yellow');
 		$('.new:nth-child(178)').addClass('span-yellow');
 		$('.new:nth-child(179)').addClass('span-yellow');
 		$('.new:nth-child(180)').addClass('span-yellow');
 		$('.new:nth-child(181)').addClass('span-yellow');
 		$('.new:nth-child(182)').addClass('span-yellow');
 		$('.new:nth-child(183)').addClass('span-yellow');
 		$('.new:nth-child(184)').addClass('span-yellow');
 		$('.new:nth-child(185)').addClass('span-yellow');
 		$('.new:nth-child(186)').addClass('span-yellow');
 		$('.new:nth-child(187)').addClass('span-yellow');
 		$('.new:nth-child(188)').addClass('span-yellow');
 		$('.new:nth-child(189)').addClass('span-yellow');
 		$('.new:nth-child(190)').addClass('span-yellow');
 		$('.new:nth-child(191)').addClass('span-yellow');
 		$('.new:nth-child(192)').addClass('span-yellow');
 		$('.new:nth-child(193)').addClass('span-yellow');
 		$('.new:nth-child(194)').addClass('span-yellow');
 		$('.new:nth-child(195)').addClass('span-yellow');
 		$('.new:nth-child(196)').addClass('span-yellow');
 		$('.new:nth-child(197)').addClass('span-yellow');
 		$('.new:nth-child(198)').addClass('span-yellow');
 		$('.new:nth-child(199)').addClass('span-yellow');
 		$('.new:nth-child(200)').addClass('span-yellow');

 		
 		$('.new:nth-child(202)').addClass('span-red');
 		$('.new:nth-child(203)').addClass('span-red');
 		$('.new:nth-child(204)').addClass('span-red');
 		$('.new:nth-child(205)').addClass('span-red');
 		$('.new:nth-child(206)').addClass('span-red');
 		$('.new:nth-child(207)').addClass('span-red');

 		$('.new:nth-child(209)').addClass('span-yellow');
 		$('.new:nth-child(210)').addClass('span-yellow');
 		$('.new:nth-child(211)').addClass('span-yellow');
 		$('.new:nth-child(212)').addClass('span-yellow');
 		$('.new:nth-child(213)').addClass('span-yellow');
 		$('.new:nth-child(214)').addClass('span-yellow');
 		$('.new:nth-child(215)').addClass('span-yellow');
 		$('.new:nth-child(216)').addClass('span-yellow');
 		$('.new:nth-child(217)').addClass('span-yellow');
 		$('.new:nth-child(218)').addClass('span-yellow');
 		$('.new:nth-child(219)').addClass('span-yellow');
 		$('.new:nth-child(220)').addClass('span-yellow');
 		$('.new:nth-child(221)').addClass('span-yellow');
 		$('.new:nth-child(222)').addClass('span-yellow');
 		$('.new:nth-child(223)').addClass('span-yellow');
 		$('.new:nth-child(224)').addClass('span-yellow');
 		$('.new:nth-child(225)').addClass('span-yellow');
 		$('.new:nth-child(226)').addClass('span-yellow');
 		$('.new:nth-child(227)').addClass('span-yellow');
 		$('.new:nth-child(228)').addClass('span-yellow');
 		$('.new:nth-child(229)').addClass('span-yellow');
 		$('.new:nth-child(230)').addClass('span-yellow');
 		$('.new:nth-child(231)').addClass('span-yellow');
 		$('.new:nth-child(232)').addClass('span-yellow');
 		$('.new:nth-child(233)').addClass('span-yellow');
 		$('.new:nth-child(234)').addClass('span-yellow');
 		$('.new:nth-child(235)').addClass('span-yellow');
 		$('.new:nth-child(236)').addClass('span-yellow');
 		$('.new:nth-child(237)').addClass('span-yellow');
 		$('.new:nth-child(238)').addClass('span-yellow');
 		$('.new:nth-child(239)').addClass('span-yellow');
 		$('.new:nth-child(240)').addClass('span-yellow');
 		$('.new:nth-child(241)').addClass('span-yellow');
 		$('.new:nth-child(242)').addClass('span-yellow');
 		$('.new:nth-child(243)').addClass('span-yellow');
 		$('.new:nth-child(244)').addClass('span-yellow');
 		$('.new:nth-child(245)').addClass('span-yellow');
 		$('.new:nth-child(246)').addClass('span-yellow');
 		$('.new:nth-child(247)').addClass('span-yellow');
 		$('.new:nth-child(248)').addClass('span-yellow');
 		$('.new:nth-child(249)').addClass('span-yellow');
 		$('.new:nth-child(250)').addClass('span-yellow');
 		$('.new:nth-child(251)').addClass('span-yellow');
 		$('.new:nth-child(252)').addClass('span-yellow');
 		$('.new:nth-child(253)').addClass('span-yellow');
 		$('.new:nth-child(254)').addClass('span-yellow');
 		$('.new:nth-child(255)').addClass('span-yellow');
 		$('.new:nth-child(256)').addClass('span-yellow');
 		$('.new:nth-child(257)').addClass('span-yellow');
 		$('.new:nth-child(258)').addClass('span-yellow');
 		$('.new:nth-child(259)').addClass('span-yellow');
 		$('.new:nth-child(260)').addClass('span-yellow');
 		$('.new:nth-child(261)').addClass('span-yellow');
 		$('.new:nth-child(262)').addClass('span-yellow');
 		$('.new:nth-child(263)').addClass('span-yellow');
 		$('.new:nth-child(264)').addClass('span-yellow');
 		$('.new:nth-child(265)').addClass('span-yellow');
 		$('.new:nth-child(266)').addClass('span-yellow');
 		$('.new:nth-child(267)').addClass('span-yellow');

 		$('.new:nth-child(269)').addClass('span-gray');
 		$('.new:nth-child(270)').addClass('span-gray');
 		$('.new:nth-child(271)').addClass('span-gray');
 		$('.new:nth-child(272)').addClass('span-gray');
 		$('.new:nth-child(273)').addClass('span-gray');
 		$('.new:nth-child(274)').addClass('span-gray');
 		$('.new:nth-child(275)').addClass('span-gray');
 		$('.new:nth-child(276)').addClass('span-gray');
 		$('.new:nth-child(277)').addClass('span-gray');
 		$('.new:nth-child(278)').addClass('span-gray');
 		$('.new:nth-child(279)').addClass('span-gray');
 		$('.new:nth-child(280)').addClass('span-gray');
 		$('.new:nth-child(281)').addClass('span-gray');
 		$('.new:nth-child(282)').addClass('span-gray');
 		$('.new:nth-child(283)').addClass('span-gray');
 		$('.new:nth-child(284)').addClass('span-gray');
 		$('.new:nth-child(285)').addClass('span-gray');
 		$('.new:nth-child(286)').addClass('span-gray');
 		$('.new:nth-child(287)').addClass('span-gray');
 		$('.new:nth-child(288)').addClass('span-gray');
 		$('.new:nth-child(289)').addClass('span-gray');
 		$('.new:nth-child(290)').addClass('span-gray');
 		$('.new:nth-child(291)').addClass('span-gray');
 		$('.new:nth-child(292)').addClass('span-gray');
 		$('.new:nth-child(293)').addClass('span-gray');
 		$('.new:nth-child(294)').addClass('span-gray');
 		$('.new:nth-child(295)').addClass('span-gray');
 		$('.new:nth-child(296)').addClass('span-gray');
 		$('.new:nth-child(297)').addClass('span-gray');
 		$('.new:nth-child(298)').addClass('span-gray');
 		$('.new:nth-child(299)').addClass('span-gray');
 		$('.new:nth-child(300)').addClass('span-gray');
 		$('.new:nth-child(301)').addClass('span-gray');
 		$('.new:nth-child(302)').addClass('span-gray');
 		$('.new:nth-child(303)').addClass('span-gray');
 		$('.new:nth-child(304)').addClass('span-gray');
 		$('.new:nth-child(305)').addClass('span-gray');
 		$('.new:nth-child(306)').addClass('span-gray');
 		$('.new:nth-child(307)').addClass('span-gray');
 		$('.new:nth-child(308)').addClass('span-gray');

		$('.new:nth-child(309)').addClass('span-red');
 		$('.new:nth-child(310)').addClass('span-red');
 		$('.new:nth-child(311)').addClass('span-red');
 		$('.new:nth-child(312)').addClass('span-red');
 		$('.new:nth-child(313)').addClass('span-red');
 		$('.new:nth-child(314)').addClass('span-red');
 		$('.new:nth-child(315)').addClass('span-red');
 		$('.new:nth-child(316)').addClass('span-red');
 		$('.new:nth-child(317)').addClass('span-red');

 		$('.new:nth-child(318)').addClass('span-green');
 		$('.new:nth-child(319)').addClass('span-green');
 		$('.new:nth-child(320)').addClass('span-green');
 		$('.new:nth-child(321)').addClass('span-green');
 		$('.new:nth-child(322)').addClass('span-green');
 		$('.new:nth-child(323)').addClass('span-green');
 		$('.new:nth-child(324)').addClass('span-green');
 		$('.new:nth-child(325)').addClass('span-green');
 		$('.new:nth-child(326)').addClass('span-green');
 		$('.new:nth-child(327)').addClass('span-green');
 		$('.new:nth-child(328)').addClass('span-green');
 		$('.new:nth-child(329)').addClass('span-green');
 		$('.new:nth-child(330)').addClass('span-green');
 		$('.new:nth-child(331)').addClass('span-green');
 		$('.new:nth-child(332)').addClass('span-green');
 		$('.new:nth-child(333)').addClass('span-green');
 		$('.new:nth-child(334)').addClass('span-green');
 		$('.new:nth-child(335)').addClass('span-green');
 		$('.new:nth-child(336)').addClass('span-green');
 		$('.new:nth-child(337)').addClass('span-red');
 		$('.new:nth-child(338)').addClass('span-red');
 		$('.new:nth-child(339)').addClass('span-green');
 		$('.new:nth-child(340)').addClass('span-green');
 		$('.new:nth-child(341)').addClass('span-green');
 		$('.new:nth-child(342)').addClass('span-green');
 		$('.new:nth-child(343)').addClass('span-green');
 		$('.new:nth-child(344)').addClass('span-green');
 		$('.new:nth-child(345)').addClass('span-green');
 		$('.new:nth-child(346)').addClass('span-green');
 		$('.new:nth-child(347)').addClass('span-green');
 		$('.new:nth-child(348)').addClass('span-green');
 		$('.new:nth-child(349)').addClass('span-green');
 		$('.new:nth-child(350)').addClass('span-green');
 		$('.new:nth-child(351)').addClass('span-green');
 		$('.new:nth-child(352)').addClass('span-green');
 		$('.new:nth-child(353)').addClass('span-green');
 		$('.new:nth-child(354)').addClass('span-green');
 		$('.new:nth-child(355)').addClass('span-green');
 		$('.new:nth-child(356)').addClass('span-green');
 		$('.new:nth-child(357)').addClass('span-green');
 		$('.new:nth-child(358)').addClass('span-green');
 		$('.new:nth-child(359)').addClass('span-green');
 		$('.new:nth-child(360)').addClass('span-green');
 		$('.new:nth-child(361)').addClass('span-green');
 		$('.new:nth-child(362)').addClass('span-green');
 		$('.new:nth-child(363)').addClass('span-green');
 		$('.new:nth-child(364)').addClass('span-green');
 		$('.new:nth-child(365)').addClass('span-green');
 		$('.new:nth-child(366)').addClass('span-green');
 		$('.new:nth-child(367)').addClass('span-green');
 		$('.new:nth-child(368)').addClass('span-green');
 		$('.new:nth-child(369)').addClass('span-green');
 		$('.new:nth-child(370)').addClass('span-green');
 		$('.new:nth-child(371)').addClass('span-green');
 		$('.new:nth-child(372)').addClass('span-green');
 		$('.new:nth-child(373)').addClass('span-green');
 		$('.new:nth-child(374)').addClass('span-green');
 		$('.new:nth-child(375)').addClass('span-green');
 		$('.new:nth-child(376)').addClass('span-green');
 		$('.new:nth-child(377)').addClass('span-green');
 		$('.new:nth-child(378)').addClass('span-green');
 		$('.new:nth-child(379)').addClass('span-green');
 		$('.new:nth-child(380)').addClass('span-green');
 		$('.new:nth-child(381)').addClass('span-green');
 		$('.new:nth-child(382)').addClass('span-green');
 		$('.new:nth-child(383)').addClass('span-green');
 		$('.new:nth-child(384)').addClass('span-green');
 		$('.new:nth-child(385)').addClass('span-green');
 		$('.new:nth-child(386)').addClass('span-green');
 		$('.new:nth-child(387)').addClass('span-green');
 		$('.new:nth-child(388)').addClass('span-green');
 		$('.new:nth-child(389)').addClass('span-green');
 		$('.new:nth-child(390)').addClass('span-green');
 		$('.new:nth-child(391)').addClass('span-green');


 		
 		$('.new:nth-child(394)').addClass('span-red');
 		$('.new:nth-child(395)').addClass('span-red');
 		$('.new:nth-child(396)').addClass('span-red');
 		$('.new:nth-child(397)').addClass('span-red');
 		$('.new:nth-child(398)').addClass('span-red');
 		$('.new:nth-child(399)').addClass('span-red');
 		$('.new:nth-child(400)').addClass('span-red');
 		$('.new:nth-child(401)').addClass('span-red');
 		$('.new:nth-child(402)').addClass('span-red');

 		$('.new:nth-child(403)').addClass('span-green');
 		$('.new:nth-child(404)').addClass('span-green');
 		$('.new:nth-child(405)').addClass('span-green');
 		$('.new:nth-child(406)').addClass('span-green');
 		$('.new:nth-child(407)').addClass('span-green');
 		$('.new:nth-child(408)').addClass('span-green');
 		$('.new:nth-child(409)').addClass('span-green');
 		$('.new:nth-child(410)').addClass('span-green');
 		$('.new:nth-child(411)').addClass('span-green');

 		$('.new:nth-child(412)').addClass('span-red');
 		$('.new:nth-child(413)').addClass('span-red');
 		$('.new:nth-child(414)').addClass('span-red');
 		$('.new:nth-child(415)').addClass('span-red');

 		$('.new:nth-child(429)').addClass('span-red');
 		$('.new:nth-child(430)').addClass('span-red');
 		$('.new:nth-child(431)').addClass('span-red');
 		$('.new:nth-child(432)').addClass('span-red');
 		$('.new:nth-child(433)').addClass('span-red');

 		$('.new:nth-child(435)').addClass('span-blue');
 		$('.new:nth-child(436)').addClass('span-blue');
 		$('.new:nth-child(437)').addClass('span-blue');
 		$('.new:nth-child(438)').addClass('span-blue');
 		$('.new:nth-child(439)').addClass('span-blue');
 		$('.new:nth-child(440)').addClass('span-blue');
 		$('.new:nth-child(441)').addClass('span-blue');
 		$('.new:nth-child(442)').addClass('span-blue');
 		$('.new:nth-child(443)').addClass('span-blue');
 		$('.new:nth-child(444)').addClass('span-blue');
 		$('.new:nth-child(445)').addClass('span-blue');
 		$('.new:nth-child(446)').addClass('span-blue');

 		$('.new:nth-child(448)').addClass('span-prpl');
 		$('.new:nth-child(449)').addClass('span-prpl');
 		$('.new:nth-child(450)').addClass('span-prpl');
 		$('.new:nth-child(451)').addClass('span-prpl');
 		$('.new:nth-child(452)').addClass('span-prpl');
 		$('.new:nth-child(453)').addClass('span-prpl');
 		$('.new:nth-child(454)').addClass('span-prpl');

 		$('.new:nth-child(456)').addClass('span-orange');
 		$('.new:nth-child(457)').addClass('span-orange');
 		$('.new:nth-child(458)').addClass('span-orange');
 		$('.new:nth-child(459)').addClass('span-orange');
 		$('.new:nth-child(460)').addClass('span-orange');
 		$('.new:nth-child(461)').addClass('span-orange');

 		$('.new:nth-child(464)').addClass('span-prpl');
 		$('.new:nth-child(465)').addClass('span-prpl');
 		$('.new:nth-child(466)').addClass('span-prpl');
 		$('.new:nth-child(467)').addClass('span-prpl');

 		$('.new:nth-child(469)').addClass('span-orange');
 		$('.new:nth-child(470)').addClass('span-orange');
 		$('.new:nth-child(471)').addClass('span-orange');
 		$('.new:nth-child(472)').addClass('span-orange');
 		$('.new:nth-child(473)').addClass('span-orange');
 		$('.new:nth-child(474)').addClass('span-orange');

 		$('.new:nth-child(476)').addClass('span-prpl');
 		$('.new:nth-child(477)').addClass('span-prpl');
 		$('.new:nth-child(478)').addClass('span-prpl');
 		$('.new:nth-child(479)').addClass('span-prpl');
 		$('.new:nth-child(480)').addClass('span-prpl');

 		$('.new:nth-child(481)').addClass('span-orange');
 		$('.new:nth-child(482)').addClass('span-orange');
 		$('.new:nth-child(483)').addClass('span-orange');
 		$('.new:nth-child(484)').addClass('span-orange');
 		$('.new:nth-child(485)').addClass('span-orange');
 		$('.new:nth-child(486)').addClass('span-orange');
 		$('.new:nth-child(487)').addClass('span-orange');
 		$('.new:nth-child(488)').addClass('span-orange');
 		$('.new:nth-child(489)').addClass('span-orange');
 		$('.new:nth-child(490)').addClass('span-orange');
 		$('.new:nth-child(491)').addClass('span-orange');
 		$('.new:nth-child(492)').addClass('span-orange');
 		$('.new:nth-child(493)').addClass('span-orange');
 		$('.new:nth-child(494)').addClass('span-orange');
 		$('.new:nth-child(495)').addClass('span-orange');

 		$('.new:nth-child(501)').addClass('span-gray');
 		$('.new:nth-child(502)').addClass('span-gray');
 		$('.new:nth-child(503)').addClass('span-gray');
 		$('.new:nth-child(504)').addClass('span-gray');
 		$('.new:nth-child(505)').addClass('span-gray');
 		$('.new:nth-child(506)').addClass('span-gray');
 		$('.new:nth-child(507)').addClass('span-gray');
 		$('.new:nth-child(508)').addClass('span-gray');
 		$('.new:nth-child(509)').addClass('span-gray');
 		$('.new:nth-child(510)').addClass('span-gray');
 		$('.new:nth-child(511)').addClass('span-gray');
 		$('.new:nth-child(512)').addClass('span-gray');
 		$('.new:nth-child(513)').addClass('span-gray');
 		$('.new:nth-child(514)').addClass('span-gray');
 		$('.new:nth-child(515)').addClass('span-gray');
 		$('.new:nth-child(516)').addClass('span-gray');
 		$('.new:nth-child(517)').addClass('span-gray');
 		$('.new:nth-child(518)').addClass('span-gray');
 		$('.new:nth-child(519)').addClass('span-gray');
 		$('.new:nth-child(520)').addClass('span-gray');
 		$('.new:nth-child(521)').addClass('span-gray');
 		$('.new:nth-child(522)').addClass('span-gray');
 		$('.new:nth-child(523)').addClass('span-gray');
 		$('.new:nth-child(524)').addClass('span-gray');
 		$('.new:nth-child(525)').addClass('span-gray');
 		$('.new:nth-child(526)').addClass('span-gray');
 		$('.new:nth-child(527)').addClass('span-gray');
 		$('.new:nth-child(528)').addClass('span-gray');
 		$('.new:nth-child(529)').addClass('span-gray');
 		$('.new:nth-child(530)').addClass('span-gray');
 		$('.new:nth-child(531)').addClass('span-gray');
 		$('.new:nth-child(532)').addClass('span-gray');
 		$('.new:nth-child(533)').addClass('span-gray');
 		$('.new:nth-child(534)').addClass('span-gray');
 		$('.new:nth-child(535)').addClass('span-gray');
 		$('.new:nth-child(536)').addClass('span-gray');
 		$('.new:nth-child(537)').addClass('span-gray');
 		$('.new:nth-child(538)').addClass('span-gray');
 		$('.new:nth-child(539)').addClass('span-gray');
 		$('.new:nth-child(540)').addClass('span-gray');
 		$('.new:nth-child(541)').addClass('span-gray');
 		$('.new:nth-child(542)').addClass('span-gray');
 		$('.new:nth-child(543)').addClass('span-gray');
 		$('.new:nth-child(544)').addClass('span-gray');
 		$('.new:nth-child(545)').addClass('span-gray');
 		$('.new:nth-child(546)').addClass('span-gray');
 		$('.new:nth-child(547)').addClass('span-gray');
 		$('.new:nth-child(548)').addClass('span-gray');
 		$('.new:nth-child(549)').addClass('span-gray');
 		$('.new:nth-child(550)').addClass('span-gray');
 		$('.new:nth-child(551)').addClass('span-gray');
 		$('.new:nth-child(552)').addClass('span-gray');
 		$('.new:nth-child(553)').addClass('span-gray');
 		$('.new:nth-child(554)').addClass('span-gray');
 		$('.new:nth-child(555)').addClass('span-gray');
 		


 		

		scrollOff=true;
  	}	  
};

// mobile switch for tokens block
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
  // mobile header
  $(window).on('scroll',function(){
  	
  	$('.fixed-header').addClass('blue');
  	
  });
  var menuCounter = 0;
  var menuOffset;
  $('.header-menu-icon').on('click',function(){
  	if(menuCounter%2==0){
  	
  	$('.fixed-header').removeClass('blue');
  	$('.hidden-menu').fadeIn(400);
  	$('.header-menu-icon').html('<img src="img/Close.svg">');
  	$('.fixed-header').addClass('bg-linear');
  	menuOffset = $(this).offset();
  	console.log(menuOffset);
  	$('.fixed-header').css({
  		position: 'fixed',
		left: '0',
		right: '0',
		bottom: '0',
		top: '-70px',
		paddingBottom: '70px',
		transform: 'translateY(70px)'
  		});
  	menuCounter++;
  }else{
  	$('.fixed-header').removeClass('h-100');
  	$('.hidden-menu').fadeOut(50);
  	$('.header-menu-icon').html('<img src="img/menu-icon.svg">');
  	$('.fixed-header').removeClass('bg-linear');
  	console.log(menuOffset);

  	$('.fixed-header').css({
  		left: '',
		right: '',
		bottom: '',
		top: '',
   		position: '',
   		transform: '',
   		paddingBottom: '10px'

  		});
  	menuCounter++;
  }
  });
  $('.menu-button').on('click',function(){
  	$('.fixed-header').removeClass('h-100');
  	$('.hidden-menu').fadeOut(50);
  	$('.header-menu-icon').html('<img src="img/menu-icon.svg">');
  	$('.fixed-header').removeClass('bg-linear');
  	$('.fixed-header').addClass('blue');
  	$('.fixed-header').css({
  		left: '',
		right: '',
		bottom: '',
		top: '',
  		position: '',
   		transform: '',
   		paddingBottom: '10px'

  		});

  	menuCounter++;
  });
  // verify email
  var emailPattern=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  $('#mob-join-bttn').on('click', function(){
  	var inputValue = $('#mob-input').val();
  	if(emailPattern.test(inputValue)){
  		
  		$('.mob-form-success').removeClass('d-none');
  		$('#mob-join-bttn').addClass('d-none');
  		$('#mob-input').addClass('d-none');
  	}else{
  		$('#mob-input').val("");
  		$('#mob-input').attr( 'placeholder', 'Incorrect e-mail');
  	}
  });

  $('#join-wl').on('click', function(){
  	var inputValue = $('#join-input').val();
  	if(emailPattern.test(inputValue)){
  		$('.header-form').removeClass('d-flex');
  		$('.header-form').addClass('d-none');
  		$('#join-wl').addClass('d-none');
  		$('#join-input').addClass('d-none');
  		$('.form-success').removeClass('d-none');
  		
  	}else{
  		$('#join-input').val("");
  		$('#join-input').attr( 'placeholder', 'Incorrect e-mail');
  	}
  });
  
	

	
// web header
  $(window).on('scroll',function(){
  	
  	$('.header-links-container').addClass('blue');
  	
  });
  //check if moved after refresh
   var headerOffset = $('.header-links-container').offset();
 if (headerOffset.top> 70) {
 	$('.header-links-container').addClass('blue');
 	$('.fixed-header').addClass('blue');
 }

 });
	

 alert('js works');

