(
	function( $ ) {
		'use strict';

		var $window = $( window ),
		    $header = $( '#header' );

		var arrowLeft = '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.331608 7.05391L4.95794 11.6802C5.38429 12.1066 6.09479 12.1066 6.52113 11.6802C6.94748 11.2539 6.94748 10.5434 6.52113 10.117L3.78946 7.36973L13.8948 7.36973C14.5106 7.36973 15 6.88028 15 6.26449C15 5.6487 14.5106 5.15925 13.8948 5.15925L3.78946 5.15925L6.52113 2.42769C6.94748 2.00134 6.94748 1.29084 6.52113 0.864495C6.30009 0.643446 6.01581 0.532858 5.73166 0.532858C5.4475 0.532858 5.16323 0.643439 4.94218 0.864495L0.331636 5.47504C0.126339 5.68034 6.57718e-07 5.96449 6.25022e-07 6.26451C5.92327e-07 6.56454 0.11058 6.8487 0.331636 7.05399L0.331608 7.05391Z" fill="white"/></svg>';
		var arrowRight = '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6684 7.05391L10.0421 11.6802C9.61571 12.1066 8.90521 12.1066 8.47887 11.6802C8.05252 11.2539 8.05252 10.5434 8.47887 10.117L11.2105 7.36973L1.10524 7.36973C0.489448 7.36973 5.57927e-07 6.88028 6.25034e-07 6.26449C6.9214e-07 5.6487 0.489448 5.15925 1.10524 5.15925L11.2105 5.15925L8.47887 2.42769C8.05252 2.00134 8.05252 1.29084 8.47887 0.864496C8.69992 0.643448 8.98419 0.532859 9.26834 0.532859C9.5525 0.532859 9.83677 0.64344 10.0578 0.864496L14.6684 5.47504C14.8737 5.68034 15 5.96449 15 6.26452C15 6.56455 14.8894 6.8487 14.6684 7.05399L14.6684 7.05391Z" fill="white"/></svg>';

		$( document ).ready( function( $ ) {
			$( '#portfolio-slider' ).slick( {
				infinite: true,
				speed: 400,
				slidesToShow: 1,
				slidesToScroll: 1,
				cssEase: 'linear',
				adaptiveHeight: true,
				dots: true,
				arrows: true,
				appendDots: '#section-portfolio-manage .slider-controls',
				appendArrows: '#section-portfolio-manage .slider-controls',
				prevArrow: '<button type="button" class="slick-prev">' + arrowLeft + '</button>',
				nextArrow: '<button type="button" class="slick-next">' + arrowRight + '</button>',
			} );
		} );

		$window.on( 'scroll', function() {
			var currentST = $( this ).scrollTop();

			if ( currentST > 0 ) {
				$header.addClass( 'header-pinned' );
			} else {
				$header.removeClass( 'header-pinned' );
			}
		} );

		$( window ).on( 'load', function() {
			$( 'body' ).addClass( 'loaded' );

			if ( $.firefly ) {
				$( '.section-effect-snow' ).each( function() {
					var $thisSection = $( this );

					$.firefly( {
						color: 'rgba(255,255,255,0.5)',
						minPixel: 1,
						maxPixel: 4,
						total: 200,
						on: $thisSection,
						borderRadius: '0',
					} );
				} );
			}
		} );
	}( jQuery )
);
