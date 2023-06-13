// JavaScript Document
//For Scroll Function
(function($){
  $(window).on("load",function(){
      $(".content-invetment").mCustomScrollbar();
	  $(".js-drupal-fullcalendar .fc-scroller").mCustomScrollbar();
  });
})(jQuery);

jQuery(document).ready(function(e) {
	
		window.onload = function () {
    document.getElementById('button').onclick = function () {
        document.getElementById('modal').style.display = "none"
    };
};

jQuery('body').on('click',function(){
		 document.getElementById('modal').style.display = "none";
	});
	
    
     jQuery("#toggleSearch").click(function(){
        jQuery(this).toggleClass("pos-change");
        jQuery(".modal-search").toggle();
        jQuery(".modal-search .js-form-item input").attr("placeholder", "Search Here...");
    });
	
    jQuery('#button').click(function(){
		jQuery('#modal').css("display", "none");
	});
    
    //For Left Menu
    /* jQuery(".content-left nav > ul").addClass("main-nav");
    jQuery(".content-left nav > ul li > ul").addClass("sub-nav");
    
    jQuery('#block-forestdepartmentmenu-2 ul > li > ul.sub-nav').css('display','none');
    jQuery('.main-nav li').on('click',function(){
     jQuery(this).toggleClass('open')
    }); */
	
	
/* 	jQuery('#cmf-site-breadcrumb li').each(function() {
    var text = jQuery(this).text();
    jQuery(this).text(text.replace("Whos Who", "Who's Who")); 
}); */
	
	
	
	
	

	
	jQuery('#sidebar-first [role="navigation"]').addClass("navmenu");
	
	
	
	/* jquery FOR SHOW/HIDE SUBMENU ON EMPLOYEE DASHBOARD */

	//jQuery('#block-employeedashboard>ul.menu li.menu-item--expanded>ul').css('display','none');
 jQuery('.navmenu ul li').find('.is-active').parents('li').addClass('open');
 jQuery('.navmenu ul li').find('.is-active').parents('ul').show();
	jQuery('.navmenu ul li').on('click',function(e){

		//e.preventDefault();
		//e.stopPropagation();
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).children('ul').css('display','none');
		}else{
			
			
			jQuery('.navmenu ul li > ul').css('display','none');
			
			jQuery('.navmenu ul li').removeClass('open');
			jQuery('.navmenu ul li').children('ul li').removeClass('open').children('ul li').removeClass('open');
			jQuery(this).addClass('open');
			jQuery(this).children('ul li').children('ul li').addClass('open');			
			
			jQuery(this).children('ul').css('display','block');
			
			
		}
		
	});
	jQuery('.navmenu ul li').on('click',function(e){
		//e.stopPropagation();
	}); 
    
    
    var animate_width = jQuery('#side_nav_cont').width();
	jQuery('#side_nav_cont').animate({right: '-'+animate_width},500);
	jQuery('#side_nav_toggle2').animate({right: '-'+animate_width},10);
	
	jQuery('#side_nav_toggle').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle2').animate({right: animate_width},800);
		jQuery('#side_nav_toggle2').animate({right: animate_width},500);
		jQuery('#side_nav_cont').animate({right: '0px'},800);
		
    });
	
	jQuery('#side_nav_toggle2').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle').animate({right: '0px'},200);
		jQuery('#side_nav_toggle').animate({right: '0px'},500);
		jQuery('#side_nav_cont').animate({right: '-'+animate_width},800);
		
    });
	
	//view button position
	/*var linksSpace = $('.links').css('padding-left');
	alert(linksSpace);
	$('.mid_links a.view').css('left',linksSpace);*/
	
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}

    //Menu Toggle 
jQuery("#show-widget").click(function(e){
	e.preventDefault();
    jQuery(".inner-expend").toggleClass("show-card");
    jQuery("#close-btn").click(function(){
        jQuery(".inner-expend").hide();
    });
});

	

//Top Scroll
  var scrollTop = jQuery(".scrollTop");
  jQuery(window).scroll(function() {
	  
    // declare variable
    var topPos = jQuery(this).scrollTop();	
    if (topPos > 200) {
      jQuery(scrollTop).css("opacity", "1");

    } else {
      jQuery(scrollTop).css("opacity", "0");
    }

  }); 
  jQuery(scrollTop).click(function() {	  
    jQuery('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
	});//Top Scroll End
	
	

});
AOS.init({
        easing: 'ease-in-out-sine'
      });
window.onresize = function(){
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
}
//AutoPlay Bande Utkal Janni Audio Code Start // 
function pauseMusic(){
  var audioPlayer = document.getElementById('audio-player');
  var audioContainer = $('#music-container');
  audioPlayer.pause();
  audioContainer.addClass("music-player--disabled");
  console.log("pause music");
}

function playMusic(){
  var audioPlayer = document.getElementById('audio-player');
  var audioContainer = $('#music-container');
  audioPlayer.play();
  audioContainer.removeClass("music-player--disabled");
  console.log("play music");
}

navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        
  var x = document.getElementById("audio-player"); 
  x.play();

   // stop microphone stream acquired by getUserMedia
   stream.getTracks().forEach(function (track) { track.stop(); });
});

//AutoPlay Bande Utkal Janni Audio Code End // 