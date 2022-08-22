(
	function( $ ) {
		'use strict';

		var Helpers = subwallet.Helpers,
		    $window = $( window ),
		    $header = $( '#header' );

		$window.on( 'scroll', function() {
			var currentST = $( this ).scrollTop();

			if ( currentST > 0 ) {
				$header.addClass( 'header-pinned' );
			} else {
				$header.removeClass( 'header-pinned' );
			}
		} );

		var $switcher = $( '.language-switcher' );

		$switcher.on( 'click', '.current-lang', function( evt ) {
			evt.preventDefault();

			$switcher.addClass( 'show' );
		} );

		$( document ).on( 'click', function( e ) {
			if ( $( e.target ).closest( $switcher ).length == 0 ) {
				$switcher.removeClass( 'show' );
			}
		} );

		$( document ).ready( function() {
			scrollTo();
			initVideoPopups();
			initSliders();
			initGrids();
			initBrandColors();
		} );

		$( window ).on( 'load', function() {
			initSectionEffectSnow();
		} );

		if ( typeof AOS !== 'undefined' ) {
			AOS.init( {
				duration: 1000,
				delay: 200,
				once: true,
			} );
		}

		function scrollTo() {
			$( document.body ).on( 'click', '.scroll-to', function( evt ) {
				evt.preventDefault();
				const target = $( this ).attr( 'href' );
				const offsetTop = $( target ).offset().top;

				window.scroll( {
					top: offsetTop - 30 - 80,
					left: 0,
					behavior: 'smooth'
				} )
			} )
		}

		function initVideoPopups() {
			if ( $.fn.lightGallery ) {
				var options = {
					selector: '.video-link',
					fullScreen: false,
					zoom: false,
					getCaptionFromTitleOrAlt: false,
					counter: false
				};

				$( '.video-popup' ).each( function() {
					$( this ).lightGallery( options );
				} );
			}
		}

		function initSliders() {
			if ( $.fn.SubwalletSwiper ) {
				$( '.tm-swiper' ).each( function() {
					$( this ).SubwalletSwiper();
				} );
			}
		}

		function initGrids() {
			if ( $.fn.SubwalletGridLayout ) {
				$( '.block-grid' ).SubwalletGridLayout();
			}
		}

		function initSectionEffectSnow() {
			if ( ! $.firefly ) {
				return;
			}

			$( '.section-effect-snow' ).each( function() {
				var $thisSection = $( this );

				var total = $thisSection.data( 'firefly-total' ) ? $thisSection.data( 'firefly-total' ) : 50;

				var minPixel = Helpers.isHandheld() ? 2 : 3;
				var maxPixel = Helpers.isHandheld() ? 3 : 4;

				var settings = {
					color: 'rgba(255,255,255,0.3)',
					minPixel: minPixel,
					maxPixel: maxPixel,
					total: total,
					on: $thisSection,
					zIndex: 0,
				};

				$.firefly( settings );
			} );
		}

		function initBrandColors() {
			$( document.body ).on( 'click', '.block-brand-color', function( evt ) {
				evt.preventDefault();

				var color = $( this ).data( 'color' );

				console.log( color );

				var result = Helpers.copyToClipboard( color );
				if ( result ) {
					$( this ).find( '.block-brand-help' ).text( 'Copied to clipboard' );
				}
			} );

			$( document.body ).on( 'mouseleave', '.block-brand-color', function( evt ) {
				$( this ).find( '.block-brand-help' ).text( 'Copy gradient' );
			} );
		}

	}( jQuery )
);
