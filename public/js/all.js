var appliaction = {
	initFancybox: function () {
		if (!$.fancybox)
			return;
		$('.fancybox').fancybox({
			overlayColor: '#000'
		});
		$('.fancybox-iframe').fancybox({
			autoScale: false,
			type: 'iframe',
			width: 1000,
			height: '75%',
			overlayColor: '#000'
		});
	},
	initCufon: function () {
		Cufon.replace('h1, .contact-phone', {fontFamily: 'FranklinGothicMedium', textShadow: '#666 1px 1px'});
		Cufon.replace('h2', {fontFamily: 'FranklinGothicMedium'});

	}
};

$(document).ready(function() {
	appliaction.initCufon();
	appliaction.initFancybox();
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-26296470-3']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
