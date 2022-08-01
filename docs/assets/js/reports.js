(
	function( $ ) {
		'use strict';

		var baseUrl = document.baseURI;

		baseUrl = baseUrl.replace( 'report.html', 'assets/data/' );

		var fontFamily = 'Space Grotesk';
		var echarts = window.echarts;

		var defaultTooltipStyle = {
			padding: [ 15, 20 ],
			backgroundColor: '#21063C',
			borderWidth: 0,
			extraCssText: 'border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);',
			textStyle: {
				fontFamily: fontFamily,
				color: '#7B8098',
				fontSize: 14,
				fontWeight: '500'
			}
		};
		var defaultTooltipSettings = $.extend( {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: 'rgba(255,255,255,0.3)'
				},
				lineStyle: {
					type: [ 4, 4 ],
					color: 'rgba(255,255,255,0.3)'
				}
			}
		}, defaultTooltipStyle );

		var defaultLegendSettings = {
			icon: 'roundRect',
			textStyle: {
				fontFamily: fontFamily,
				color: '#ffffff',
				fontSize: 13,
				fontWeight: '600',
				padding: [ 0, 0, 0, 3 ]
			},
			itemWidth: 14,
			itemHeight: 14,
			itemGap: 30,
			top: 'bottom'
		};

		var defaultAxisPointerSettings = {
			label: {
				color: '#66E1B6',
				backgroundColor: '#262C4A'
			}
		};

		$( document ).ready( function() {
			$( '.block-chart' ).waypoint( function() {
				// Fix for different ver of waypoints plugin.
				var _self = this.element ? this.element : this;
				var $self = $( _self );

				initCharts( $self );

				this.destroy(); // trigger once.
			}, {
				offset: '90%'
			} );

			$( '#table-nft-market-overview' ).DataTable( {
				info: false,
				paging: false,
				searching: false
			} );

			initTableOfContents();
		} );

		$( window ).on( 'resize', function() {
			$( '.block-chart' ).each( function() {
				var chartInstance = echarts.getInstanceByDom( $( this ).get( 0 ) );

				if ( typeof chartInstance !== 'undefined' ) {
					chartInstance.resize( {
						width: 'auto',
						height: 'auto'
					} );
				}
			} );
		} );

		function initTableOfContents() {
			var $tableOfContents = $( '#table-of-contents' );

			$tableOfContents.on( 'click', '.btn-close-panel', function( e ) {
				e.preventDefault();
				e.stopPropagation();

				$tableOfContents.removeClass( 'open' );
			} );

			$( document ).on( 'click', '#btn-open-panel', function( e ) {
				e.preventDefault();
				e.stopPropagation();

				$tableOfContents.addClass( 'open' );
			} );
		}

		function validate_number( number ) {
			// Remove thousand separator chars.
			return number.replace( /,(?=[\d,]*\.\d{2}\b)/g, '' );
		}

		function precisionRoundMod( number, precision ) {
			var factor = Math.pow( 10, precision );
			var n = precision < 0 ? number : 0.01 / factor + number;
			return Math.round( n * factor ) / factor;
		}

		function numberWithCommas( x ) {
			return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
		}

		function moneyFormat( value ) {
			// Nine Zeroes for Billions
			return Math.abs( Number( value ) ) >= 1.0e+9

				? Math.abs( Number( value ) ) / 1.0e+9 + "B"
				// Six Zeroes for Millions.
				: Math.abs( Number( value ) ) >= 1.0e+6

					? (
						  Math.abs( Number( value ) ) / 1.0e+6
					  ).toFixed( 2 ) + "M"
					// Three Zeroes for Thousands
					: Math.abs( Number( value ) ) >= 1.0e+3

						? Math.abs( Number( value ) ) / 1.0e+3 + "K"

						: Math.abs( Number( value ) );
		}

		function initCharts( $chart ) {
			var chartName     = $chart.data( 'chart-name' ),
			    chartSource   = $chart.data( 'chart-source' ),
			    chartInstance = echarts.init( $chart.get( 0 ), 'macarons' );

			chartInstance.showLoading( 'default', {
				text: 'loading',
				color: '#66e1b6',
				textColor: '#66e1b6',
				maskColor: '#070e30',
				zlevel: 0,
				fontSize: 18,
				showSpinner: true,
				spinnerRadius: 10,
				lineWidth: 2,
				fontWeight: 600,
				fontStyle: 'normal',
				fontFamily: fontFamily
			} );

			if ( ! chartName ) {
				return;
			}

			if ( 'inline' !== chartSource ) {
				var fileName = typeof chartSource !== 'undefined' ? chartSource : chartName;
				var url = baseUrl + fileName + '.json';

				fetch( url ).then( function( response ) {
					return response.json();
				} ).then( function( jsonData ) {
					var chartOptions = {};

					switch ( chartName ) {
						case 'price-dev-act':
							chartOptions = getChartOptionsPriceDevAct( jsonData );
							break;
						case 'dev-act-comparison':
							chartOptions = getChartOptionsDevActComparison( jsonData );
							break;
						case 'vc-polkadot':
							chartOptions = getChartOptionsVCPolkadot( jsonData );
							break;
						case 'polkadot-parachain':
							chartOptions = getChartOptionsPolkadotParachain( jsonData );
							break;
						case 'kusama-parachain':
							chartOptions = getChartOptionsKusamaParachain( jsonData );
							break;
						case 'dotsama-dex':
							chartOptions = getChartOptionsDotsamaDex( jsonData );
							break;
						case 'dotsama-lending-protocol':
							chartOptions = getChartOptionsDotsamaLendingProtocol( jsonData );
							break;
						case 'ausd-issuance':
							chartOptions = getChartOptionsAUsdIssuance( jsonData );
							break;
						case 'rmrk-cumulative-sales':
							chartOptions = getChartOptionsRmrkCumulativeSales( jsonData );
							break;
						case 'rmrk-daily-sales':
							chartOptions = getChartOptionsRmrkDailySales( jsonData );
							break;
						case 'web-assembly-usage':
							chartOptions = getChartOptionsWebAssemblyUsage( jsonData );
							break;

						// Not done.
						case 'tmp-polkadot-account-overview':
							chartOptions = getChartOptionsDotAccOverview( jsonData );
							break;
						case 'tmp-dot-treasury-activity':
							chartOptions = getChartOptionsDotTreasuryActivity( jsonData );
							break;
					}
					chartInstance.hideLoading();
					chartInstance.setOption( chartOptions );
				} );
			} else {
				var chartOptions = {};

				switch ( chartName ) {
					case 'treasury-output':
						chartOptions = getChartOptionsTreasuryOutput();
						break;
				}
				chartInstance.hideLoading();
				chartInstance.setOption( chartOptions );
			}
		}

		function getChartOptionsPriceDevAct( jsonData ) {
			var totalItems = jsonData.length,
			    data       = {
				    kusama: [],
				    polkadot: [],
				    dev: []
			    },
			    colors     = [
				    '#66E1B6',
				    '#EC4E44',
				    '#A2B253'
			    ];

			for ( var i = 0; i < totalItems; i ++ ) {
				data.kusama.push( [ jsonData[ i ].date, jsonData[ i ].ksm ] );
				data.polkadot.push( [ jsonData[ i ].date, jsonData[ i ].dot ] );
				data.dev.push( [ jsonData[ i ].date, jsonData[ i ].dev ] );
			}

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: defaultTooltipSettings,
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '10%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						boundaryGap: false,
						splitLine: {
							show: true,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#212845'
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							formatter: '{dd} {MMM} {yy}',
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: 'KSM Price',
						nameTextStyle: {
							fontSize: 0
						},
						position: 'right',
						alignTicks: true,
						axisLine: {
							show: true,
							lineStyle: {
								color: colors[ 0 ]
							}
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: {
							label: {
								color: '#020722',
								backgroundColor: '#66E1B6'
							}
						},
						axisLabel: {
							color: '#7B8098'
						}
					},
					{
						type: 'value',
						name: 'DOT Price',
						nameTextStyle: {
							fontSize: 0
						},
						position: 'right',
						alignTicks: true,
						offset: 60,
						axisLine: {
							show: true,
							lineStyle: {
								color: colors[ 1 ]
							}
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisLabel: {
							color: '#7B8098'
						}
					}, {
						type: 'value',
						name: 'Development Activity',
						nameTextStyle: {
							fontSize: 0
						},
						position: 'right',
						alignTicks: true,
						offset: 120,
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: colors[ 2 ]
							}
						},
						axisLabel: {
							color: '#7B8098'
						}
					}
				],
				series: [
					{
						name: 'KSM Price',
						data: data.kusama,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(102,225,182,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 0 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'DOT Price',
						data: data.polkadot,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
								{
									offset: 0,
									color: 'rgba(236, 78, 68,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 1 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						yAxisIndex: 1,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Development Activity',
						data: data.dev,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(213, 234, 114,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 2 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						yAxisIndex: 2,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					}
				]
			};
		}

		function getChartOptionsDevActComparison( jsonData ) {
			var totalItems = jsonData.length,
			    data       = {
				    dot: [],
				    eth: [],
				    sol: [],
				    near: [],
				    matic: []
			    },
			    colors     = [
				    '#66E1B6',
				    '#9D3BEA',
				    '#EC4E44',
				    '#889641',
				    '#004BFF'
			    ];

			for ( var i = 0; i < totalItems; i ++ ) {
				data.dot.push( [ jsonData[ i ].date, jsonData[ i ].dot ] );
				data.eth.push( [ jsonData[ i ].date, jsonData[ i ].eth ] );
				data.sol.push( [ jsonData[ i ].date, jsonData[ i ].sol ] );
				data.near.push( [ jsonData[ i ].date, jsonData[ i ].near ] );
				data.matic.push( [ jsonData[ i ].date, jsonData[ i ].matic ] );
			}

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: defaultTooltipSettings,
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						boundaryGap: false,
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#212845'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							formatter: '{dd} {MMM} {yy}',
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						position: 'right',
						axisLine: {
							show: true,
							lineStyle: {
								color: colors[ 0 ]
							}
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							color: '#7B8098'
						}
					}
				],
				series: [
					{
						name: 'Near',
						data: data.near,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(102,225,182,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 0 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Ethereum',
						data: data.eth,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(213, 234, 114,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 1 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Solana',
						data: data.sol,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
								{
									offset: 0,
									color: 'rgba(236, 78, 68,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 2 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Polkadot',
						data: data.dot,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
								{
									offset: 0,
									color: 'rgba(236, 78, 68,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 3 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Matic',
						data: data.matic,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
								{
									offset: 0,
									color: 'rgba(236, 78, 68,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 4 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					}
				]
			};
		}

		function getChartOptionsDotAccOverview( jsonData ) {
			var totalItems = jsonData.length,
			    colors     = [ '#66E1B6' ];

			var data = {
				dot: []
			};

			for ( var i = 0; i < totalItems; i ++ ) {
				var value = validate_number( jsonData[ i ].parallel );
				data.dot.push( [ jsonData[ i ].date, value ] );
			}

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: defaultTooltipSettings,
				legend: {
					show: false
				},
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						boundaryGap: false,
						splitLine: {
							show: true,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#212845'
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							formatter: '{dd} {MMM} {yy}',
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisLine: {
							show: false,
							lineStyle: {
								type: [ 4, 4 ],
								color: '#212845'
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							color: '#7B8098'
						}
					}
				],
				series: [
					{
						name: 'Polkadot Account',
						data: data.dot,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0.5, 0.5, 1, 1, [
								{
									offset: 0,
									color: 'rgba(14,64,82,1)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 0 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					}
				]
			};
		}

		function getChartOptionsVCPolkadot( jsonData ) {
			var totalItems = jsonData.length,
			    data       = {
				    category: [],
				    investing: [],
				    total: []
			    },
			    colors     = [
				    '#66E1B6',
				    '#004BFF'
			    ];

			for ( var i = 0; i < totalItems; i ++ ) {
				data.category.push( jsonData[ i ].time );
				data.investing.push( jsonData[ i ].investing );
				data.total.push( jsonData[ i ].total );
			}

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: $.extend( {
					valueFormatter: function( value ) {
						return value + '%';
					},
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
						label: {
							color: '#020722',
							backgroundColor: '#4ccbc9'
						},
						crossStyle: {
							color: 'rgba(255,255,255,0.3)'
						},
						lineStyle: {
							type: [ 4, 4 ],
							color: 'rgba(255,255,255,0.3)'
						}
					}
				}, defaultTooltipStyle ),
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#2D3863' ]
							}
						},
						axisLabel: {
							formatter: "{value}%",
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'category',
						data: data.category,
						inverse: true,
						axisTick: {
							show: false
						},
						axisLine: {
							show: true,
							lineStyle: {
								type: [ 4, 4 ],
								color: '#2D3863'
							}
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#2D3863' ]
							}
						},
						axisLabel: {
							fontFamily: fontFamily,
							fontSize: 18,
							fontWeight: 500,
							color: '#A8ADC3'
						}
					}
				],
				series: [
					{
						type: 'bar',
						stack: 'total',
						name: 'VCs Investing in Polkadot',
						data: data.investing,
						label: {
							fontFamily: fontFamily,
							fontSize: 18,
							fontWeight: 500,
							align: 'right',
							color: '#020722',
							show: true
						},
						barMaxWidth: 48,
						itemStyle: {
							borderRadius: [ 8, 0, 0, 8 ]
						},
						emphasis: {
							focus: 'series'
						}
					}, {
						type: 'bar',
						stack: 'total',
						name: 'Total VCs',
						data: data.total,
						label: {
							fontFamily: fontFamily,
							fontSize: 18,
							fontWeight: 500,
							align: 'right',
							show: true
						},
						barMaxWidth: 48,
						itemStyle: {
							borderRadius: [ 0, 8, 8, 0 ]
						},
						emphasis: {
							focus: 'series'
						}
					}
				]
			};
		}

		function getChartOptionsDotTreasuryActivity( jsonData ) {
			var colors     = [
				    '#66E1B6',
				    '#9D3BEA',
				    '#004BFF'
			    ],
			    totalItems = jsonData.length,
			    data       = {
				    income: [],
				    output: [],
				    treasury: []
			    };

			for ( var i = 0; i < totalItems; i ++ ) {
				var income = jsonData[ i ].parallel ? validate_number( jsonData[ i ].parallel ) : '';
				data.income.push( [ jsonData[ i ].date, income ] );

				var output = jsonData[ i ].acala ? validate_number( jsonData[ i ].acala ) : '';
				data.output.push( [ jsonData[ i ].date, output ] );

				var treasury = jsonData[ i ].parallel ? validate_number( jsonData[ i ].parallel ) : '';
				data.treasury.push( [ jsonData[ i ].date, treasury ] );
			}

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: defaultTooltipSettings,
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						boundaryGap: false,
						data: data.categories,
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#212845'
							}
						},
						splitLine: {
							show: false,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							formatter: '{dd} {MMM} {yy}',
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						position: 'right',
						axisLine: {
							show: false
						},
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: $.extend( true, {
							label: {
								formatter: "{value}M"
							}
						}, defaultAxisPointerSettings ),
						axisLabel: {
							formatter: "{value}M",
							color: '#7B8098'
						}
					}
				],
				series: [
					{
						name: 'Income',
						data: data.income,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(102,225,182,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 0 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Output',
						data: data.output,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
								{
									offset: 0,
									color: 'rgba(73, 33, 130,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 1 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					},
					{
						name: 'Treasury',
						data: data.treasury,
						areaStyle: {
							color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
								{
									offset: 0,
									color: 'rgba(8, 62, 136,0.5)'
								},
								{
									offset: 1,
									color: 'rgba(7, 14, 48,0)'
								}
							] )
						},
						itemStyle: {
							color: colors[ 2 ]
						},
						type: 'line',
						smooth: true,
						showSymbol: false,
						stack: 'Total',
						emphasis: {
							focus: 'series'
						}
					}
				]
			};
		}

		function getChartOptionsPolkadotParachain( jsonData ) {
			var datasets       = [
				    {
					    name: 'parallel',
					    label: 'Parallel'
				    }, {
					    name: 'acala',
					    label: 'Acala'
				    }
			    ],
			    colors         = [
				    '#66E1B6',
				    '#9D3BEA'
			    ],
			    areaBackground = [
				    [ 'rgba(22,53,57,0.9)', 'rgba(22,53,57,0)' ],
				    [ 'rgba(72,33,128,0.9)', 'rgba(72,33,128,0)' ]
			    ];

			return getChartLinesBaseOptions( jsonData, datasets, colors, areaBackground );
		}

		function getChartOptionsKusamaParachain( jsonData ) {
			var datasets = [
				    {
					    name: 'karura',
					    label: 'Karura'
				    }, {
					    name: 'bifrost',
					    label: 'Bifrost'
				    }, {
					    name: 'genshiro',
					    label: 'Genshiro'
				    }
			    ],
			    colors   = [
				    '#C30D00',
				    '#F7A21B',
				    '#004BFF'
			    ];

			return getChartLinesBaseOptions( jsonData, datasets, colors );
		}

		function getChartOptionsDotsamaDex( jsonData ) {
			var datasets = [
				    {
					    name: 'stellaswap',
					    label: 'StellaSwap'
				    }, {
					    name: 'beamswap',
					    label: 'Beamswap'
				    }, {
					    name: 'solarbeam',
					    label: 'Solarbeam'
				    }, {
					    name: 'solarflare',
					    label: 'Solarflare'
				    }, {
					    name: 'zenlink',
					    label: 'Zenlink'
				    }
				    /*, {
					    name: 'arthswap',
					    label: 'ArthSwap'
				    }*/
			    ],
			    colors   = [
				    '#66E1B6',
				    //'#004BFF',
				    '#C30D00',
				    '#F7A21B',
				    '#9D3BEA',
				    '#89C900'
			    ];

			return getChartLinesBaseOptions( jsonData, datasets, colors );
		}

		function getChartOptionsDotsamaLendingProtocol( jsonData ) {
			var datasets       = [
				    {
					    name: 'starlay',
					    label: 'Starlay'
				    }, {
					    name: 'artemis',
					    label: 'Moonwell Artemis'
				    }, {
					    name: 'apollo',
					    label: 'Moonwell Apollo'
				    }
			    ],
			    colors         = [
				    '#004BFF',
				    '#C30D00',
				    '#F7A21B'
			    ],
			    areaBackground = [
				    [ 'rgba(31,65,161,1)', 'rgba(31,65,161,0.4)' ],
				    [ 'rgba(123,19,22,1)', 'rgba(123,19,22,0.4)' ],
				    [ 'rgba(107,76,41,1)', 'rgba(107,76,41,0.4)' ]
			    ];

			return getChartLinesBaseOptions( jsonData, datasets, colors, areaBackground );
		}

		function getChartOptionsAUsdIssuance( jsonData ) {
			var datasets       = [
				    {
					    name: 'acala',
					    label: 'Acala'
				    }, {
					    name: 'karura',
					    label: 'Karura'
				    }
			    ],
			    colors         = [
				    '#C30D00',
				    '#004BFF'
			    ],
			    areaBackground = [
				    [ 'rgba(108,13,22,0.9)', 'rgba(108,13,22,0.3)' ],
				    [ 'rgba(23,46,152,0.9)', 'rgba(23,46,152,0.3)' ]
			    ],
			    seriesOptions  = {
				    stack: 'total'
			    };

			return getChartLinesBaseOptions( jsonData, datasets, colors, areaBackground, seriesOptions );
		}

		function getChartOptionsRmrkCumulativeSales( jsonData ) {
			var datasets          = [
				    {
					    name: 'cumulative_sum_of_amount',
					    label: 'Cumulative Sum of Amount'
				    }
			    ],
			    colors            = [
				    '#004BFF'
			    ],
			    areaBackground    = [
				    [ 'rgba(23,46,152,0.9)', 'rgba(23,46,152,0.3)' ]
			    ],
			    seriesOptions     = {
				    lineStyle: {
					    width: 4
				    }
			    },
			    chartExtraOptions = {
				    legend: {
					    show: false
				    },
				    grid: {
					    bottom: '3%'
				    },
				    yAxis: [
					    {
						    splitNumber: 4
					    }
				    ]
			    };

			return getChartLinesBaseOptions( jsonData, datasets, colors, areaBackground, seriesOptions, chartExtraOptions );
		}

		function getChartOptionsRmrkDailySales( jsonData ) {
			var datasets    = [
				    {
					    name: 'kanbird',
					    label: 'KANBIRD'
				    }, {
					    name: 'kanchamp',
					    label: 'KANCHAMP'
				    }, {
					    name: 'kanprtn',
					    label: 'KANPRTN'
				    }, {
					    name: 'evrloot',
					    label: 'EVRLOOT'
				    }, {
					    name: 'kk01',
					    label: 'KK01'
				    }, {
					    name: 'rmrkbnnrs',
					    label: 'RMRKBNNRS'
				    }, {
					    name: 'kq01',
					    label: 'KQ01'
				    }, {
					    name: 'kanbg',
					    label: 'KANBG'
				    }, {
					    name: 'others',
					    label: 'Others'
				    }
			    ],
			    colors      = [
				    '#004BFF',
				    '#DF5C53',
				    '#709BF5',
				    '#66E1B6',
				    '#9D3BEA',
				    '#2D9C42',
				    '#889641',
				    '#E12C29',
				    '#F7A21B'
			    ],
			    totalItems  = jsonData.length,
			    data        = [],
			    chartSeries = [];

			datasets.forEach( function( dataset ) {
				data[ dataset.name ] = [];
			} );

			for ( var i = 0; i < totalItems; i ++ ) {
				datasets.forEach( function( dataset ) {
					var value = jsonData[ i ][ dataset.name ] ? validate_number( jsonData[ i ][ dataset.name ] ) : '';
					data[ dataset.name ].push( [ jsonData[ i ].date, value ] );
				} );
			}

			datasets.forEach( function( dataset, index ) {
				chartSeries.push( {
					name: dataset.label,
					data: data[ dataset.name ],
					itemStyle: {
						color: colors[ index ]
					},
					type: 'bar',
					stack: 'total',
					emphasis: {
						focus: 'series'
					}
				} );
			} );

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: {
					trigger: 'axis',
					padding: [ 15, 20 ],
					backgroundColor: '#21063C',
					borderWidth: 0,
					extraCssText: 'border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);',
					textStyle: {
						fontFamily: fontFamily,
						color: '#7B8098',
						fontSize: 14,
						fontWeight: '500'
					},
					axisPointer: {
						type: 'shadow',
						label: {
							color: '#020722',
							backgroundColor: '#4ccbc9'
						},
						crossStyle: {
							color: 'rgba(255,255,255,0.3)'
						},
						lineStyle: {
							type: [ 4, 4 ],
							color: 'rgba(255,255,255,0.3)'
						}
					}
				},
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						show: false
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						}
					}
				],
				series: chartSeries
			};
		}

		function getChartOptionsWebAssemblyUsage( jsonData ) {
			var datasets       = [
				    {
					    name: 'notused',
					    label: 'Not used'
				    }, {
					    name: 'occasionally',
					    label: 'Have used occasionally'
				    }, {
					    name: 'sometimes',
					    label: 'Use sometimes'
				    },
				    {
					    name: 'frequently',
					    label: 'Use frequently'
				    }
			    ],
			    datasetsLength = datasets.length,
			    colors         = [
				    '#004BFF',
				    '#DF5C53',
				    '#F7A21B',
				    '#66E1B6'
			    ],
			    categories     = [
				    {
					    name: 'rust',
					    label: 'Rust'
				    }, {
					    name: 'javascript',
					    label: 'JavaScript'
				    }, {
					    name: 'c_plus',
					    label: 'C++'
				    }, {
					    name: 'blazor',
					    label: 'Blazor'
				    }, {
					    name: 'assemblyscript',
					    label: 'AssemblyScript'
				    }, {
					    name: 'python',
					    label: 'Python'
				    }, {
					    name: 'go',
					    label: 'Go'
				    }, {
					    name: 'wat',
					    label: 'WAT'
				    }, {
					    name: 'zig',
					    label: 'Zig'
				    }, {
					    name: 'java',
					    label: 'Java'
				    }, {
					    name: 'swift',
					    label: 'Swift'
				    }, {
					    name: 'ruby',
					    label: 'Ruby'
				    }, {
					    name: 'grain',
					    label: 'Grain'
				    }
			    ],
			    totalItems     = jsonData.length,
			    data           = [],
			    chartSeries    = [];

			datasets.forEach( function( dataset, index ) {
				data[ dataset.name ] = [];
			} );

			for ( var catIndex = 0; catIndex < categories.length; catIndex ++ ) {
				categories[ catIndex ].total = 0;
				for ( var i = 0; i < totalItems; i ++ ) {
					var value = parseInt( jsonData[ i ][ categories[ catIndex ].name ] );
					categories[ catIndex ].total += value;
					switch ( jsonData[ i ].category ) {
						case 'use frequently':
							categories[ catIndex ].frequently = value;
							break;
						case 'use sometimes':
							categories[ catIndex ].sometimes = value;
							break;
						case 'have used occasionally':
							categories[ catIndex ].occasionally = value;
							break;
						case 'not used':
							categories[ catIndex ].notused = value;
							break;
					}
				}
			}

			for ( var i = 0; i < categories.length; i ++ ) {
				var total = categories[ i ].total;
				categories[ i ].frequentlyPercent = precisionRoundMod( categories[ i ].frequently / total * 100, 2 );
				categories[ i ].sometimesPercent = precisionRoundMod( categories[ i ].sometimes / total * 100, 2 );
				categories[ i ].occasionallyPercent = precisionRoundMod( categories[ i ].occasionally / total * 100, 2 );
				categories[ i ].notusedPercent = precisionRoundMod( 100 - categories[ i ].frequentlyPercent - categories[ i ].sometimesPercent - categories[ i ].occasionallyPercent, 2 );
			}

			for ( var dataIndex = 0; dataIndex < datasets.length; dataIndex ++ ) {
				datasets[ dataIndex ].data = [];
				var name = datasets[ dataIndex ].name;
				for ( var catIndex = 0; catIndex < categories.length; catIndex ++ ) {
					datasets[ dataIndex ].data.push( categories[ catIndex ][ name + 'Percent' ] );
				}
			}

			datasets.forEach( function( dataset, index ) {
				var datasetOptions = {
					name: dataset.label,
					data: dataset.data,
					realData: dataset.realData,
					foo: 'bar',
					itemStyle: {
						color: colors[ index ]
					},
					barMaxWidth: 24,
					type: 'bar',
					stack: 'total',
					emphasis: {
						focus: 'series'
					}
				};

				if ( index === 0 ) {
					datasetOptions.itemStyle.borderRadius = [ 0, 0, 3, 3 ];
				}

				if ( index === datasetsLength - 1 ) {
					datasetOptions.itemStyle.borderRadius = [ 3, 3, 0, 0 ];
				}

				chartSeries.push( datasetOptions );
			} );

			return {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: {
					trigger: 'axis',
					padding: [ 15, 20 ],
					backgroundColor: '#21063C',
					borderWidth: 0,
					extraCssText: 'border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);',
					textStyle: {
						fontFamily: fontFamily,
						color: '#7B8098',
						fontSize: 14,
						fontWeight: '500'
					},
					valueFormatter: function( value ) {
						return value + '%';
					},
					axisPointer: {
						type: 'shadow',
						label: {
							color: '#020722',
							backgroundColor: '#4ccbc9'
						},
						crossStyle: {
							color: 'rgba(255,255,255,0.3)'
						},
						lineStyle: {
							type: [ 4, 4 ],
							color: 'rgba(255,255,255,0.3)'
						}
					}
				},
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: [
							'Rust',
							'JavaScript',
							'C++',
							'Blazor',
							'AssemblyScript',
							'Python',
							'Go',
							'WAT',
							'Zig',
							'Java',
							'Swift',
							'Ruby',
							'Grain'
						],
						axisLabel: {
							interval: 0,
							rotate: 30
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisLabel: {
							formatter: '{value}%',
							color: '#7B8098'
						}
					}
				],
				series: chartSeries
			};
		}

		function getChartOptionsTreasuryOutput() {
			var datasets = [
				{
					value: 470447,
					name: 'Proposal'
				}, {
					value: 12212,
					name: 'Tips'
				}, {
					value: 1103232,
					name: 'Bounties'
				}, {
					value: 5070182,
					name: 'Burnt'
				}
			], colors    = [
				'#66E1B6',
				'#F7A21B',
				'#DF5C53',
				'#004BFF'
			];

			// find the sum of all data values
			/*var sum = datasets.reduce( function( prev, current ) {
				return prev + current.value;
			}, 0 );

			sum = moneyFormat( sum );*/

			return {
				color: colors,
				tooltip: $.extend( true, {
					trigger: 'item',
					valueFormatter: function( value ) {
						return numberWithCommas( value ) + ' DOT';
					}
				}, defaultTooltipStyle ),
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '0',
					containLabel: true
				},
				series: [
					{
						name: 'Treasury Output',
						type: 'pie',
						//top: 'top',
						center: [ '50%', '45%' ],
						radius: [ '68%', '86%' ],
						label: {
							color: '#A8ADC3',
							fontFamily: fontFamily,
							fontWeight: 500,
							fontSize: 18,
							position: 'center',
							formatter: [
								'{a|6.66M} {x|DOT}',
								'{t|Total amount}'
							].join( '\n' ),
							rich: {
								a: {
									color: '#66E1B6',
									fontWeight: 700,
									fontSize: '30'
								},
								x: {
									color: '#ffffff',
									fontWeight: 700,
									fontSize: '30'
								},
								t: {
									color: '#A8ADC3',
									fontWeight: 500,
									fontSize: 18,
									padding: [ 18, 0, 0, 0 ]
								}
							}
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							borderColor: '#070e30',
							borderWidth: 4
						},
						emphasis: {
							scaleSize: 5
						},
						data: datasets
					}
				]
			};
		}

		function getChartLinesBaseOptions( jsonData, datasets, colors, areaBackground, seriesOptions, chartExtraOptions ) {
			var totalItems = jsonData.length,
			    data       = [];

			datasets.forEach( function( dataset ) {
				data[ dataset.name ] = [];
			} );

			for ( var i = 0; i < totalItems; i ++ ) {
				datasets.forEach( function( dataset ) {
					var value = jsonData[ i ][ dataset.name ] ? validate_number( jsonData[ i ][ dataset.name ] ) : '';
					data[ dataset.name ].push( [ jsonData[ i ].date, value ] );
				} );
			}

			var chartSeries = [];

			datasets.forEach( function( dataset, index ) {
				var options = {
					name: dataset.label,
					data: data[ dataset.name ],
					itemStyle: {
						color: colors[ index ]
					},
					type: 'line',
					smooth: true,
					showSymbol: false,
					connectNulls: true, // used for dotsama dex.
					emphasis: {
						focus: 'series'
					}
				};

				if ( areaBackground && areaBackground[ index ] ) {
					options.areaStyle = {
						//opacity: 0.6,
						color: new echarts.graphic.LinearGradient( 0, 0, 1, 1, [
							{
								offset: 0,
								color: areaBackground[ index ][ 0 ]
							},
							{
								offset: 1,
								color: areaBackground[ index ][ 1 ]
							}
						] )
					};
				}

				if ( typeof seriesOptions !== 'undefined' ) {
					options = $.extend( options, seriesOptions );
				}

				chartSeries.push( options );
			} );

			var chartOptions = {
				color: colors,
				textStyle: {
					fontFamily: fontFamily,
					fontWeight: 500
				},
				tooltip: $.extend( defaultTooltipSettings, {
					valueFormatter: function( value ) {
						return value ? '$' + numberWithCommas( value ) : '-';
					}
				} ),
				legend: defaultLegendSettings,
				grid: {
					left: '3%',
					right: '3%',
					top: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'time',
						boundaryGap: false,
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#212845'
							}
						},
						splitLine: {
							show: false,
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: defaultAxisPointerSettings,
						axisLabel: {
							formatter: '{dd} {MMM} {yy}',
							color: '#7B8098'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitNumber: 4,
						splitLine: {
							lineStyle: {
								type: [ 4, 4 ],
								color: [ '#212845' ]
							}
						},
						axisPointer: $.extend( true, {
							label: {
								formatter: "${value}"
							}
						}, defaultAxisPointerSettings ),
						axisLabel: {
							formatter: "${value}",
							color: '#7B8098'
						}
					}
				],
				series: chartSeries
			};

			if ( chartExtraOptions ) {
				return $.extend( true, chartExtraOptions, chartOptions );
			}

			return chartOptions;
		}

	}( jQuery )
);
