$(window).load(function() {
	$logos = $('.xx_logos');

	$logos.isotope({
	    // options
	    itemSelector : 'li',
	    layoutMode : 'masonry',
	    masonry: {
    		gutterWidth: 0
  		}
	});

	$('#xx_filter a').on('click', function(){
	    $('#xx_filter a').removeClass('active');
	    $('#xx_wrapper').attr('data-open', $(this).attr('data-filter'));
	    $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
	    $logos.isotope({ filter: selector });
	    return false;
	});

	// $('.xx_logos a').bind('click', function(){
	// 	var position = $(this).offset();

	// 	$('.xx_logos a').fancybox({
	// 		maxWidth: 450,
	// 		padding: 25,
	// 		afterLoad : function() {
	// 			$('.fancybox-wrap').css('visibility', 'hidden');
	// 		}
	// 	});

	// 	setTimeout(function(){
	// 		$('.fancybox-wrap').css({
	// 			//'top': (position.top-200) + 'px',
	// 			'top': '20%',
	// 			'width': '450px',
	// 			'visibility': 'visible'
	// 		}).show();
	// 	},1000)
	// });

	// $('.xx_collections img').on('click', function(event){
	// 	event.preventDefault();
	// 	if($(this).attr('data-open') !== undefined){
	// 		$(this).closest('.xx_collections').find('img').each(function(index, el){
	// 			$el = $(el);
	// 			if($el.attr('data-open') !== undefined){
	// 				$el.attr('src', 'img/' + $el.attr('data-open') + '_available.png');
	// 			}
	// 		});
	// 		$(this).closest('.xx_popup').find('.xx_text').hide();

	// 		$(this).closest('.xx_popup').find('#xx_' + $(this).attr('data-open')).show();
	// 		$(this).attr('src', 'img/' + $(this).attr('data-open') + '_selected.png');
	// 	}
	// });
});
