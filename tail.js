document.write('\
	<!-- animation --> \
	<script src="js/wow.min.js"></script>\
	<script> \
		 new WOW().init();\
	</script> \
	<!-- //animation --> \
	<!-- start-smooth-scrolling --> \
	<script type="text/javascript" src="js/move-top.js"></script> \
	<script type="text/javascript" src="js/easing.js"></script>	\
	<script type="text/javascript"> \
			jQuery(document).ready(function($) { \
				$(".scroll").click(function(event){		\
					event.preventDefault();\
					$(\'html,body\').animate({scrollTop:$(this.hash).offset().top},1000); \
				});\
			}); \
	</script> \
	<!-- //end-smooth-scrolling --> \
	<!-- smooth-scrolling-of-move-up --> \
	<script type="text/javascript"> \
		$(document).ready(function() { \
			/* \
			var defaults = { \
				containerID: \'toTop\', // fading element id \
				containerHoverID: \'toTopHover\', // fading element hover id \
				scrollSpeed: 1200, \
				easingType: \'linear\' \
			}; \
			*/ \
			\
			$().UItoTop({ easingType: \'easeOutQuart\' }); \
			\
		}); \
	</script> \
	<!-- //smooth-scrolling-of-move-up --> \
	<!-- Bootstrap core JavaScript \
    ================================================== --> \
    <!-- Placed at the end of the document so the pages load faster --> \
    <script src="js/bootstrap.js"></script> \
') 
