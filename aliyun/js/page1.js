var page1 = {

	"getData": function (){
		$.ajax({
			type: "get",
			url: "./json/monitorData.json",
			dataType: "json",
			success: function (thedata){
				page1.chart01(thedata);
				page1.chart02(thedata);
			}
		});
	},

	"chart01": function (thedata){
		var wuxiMap = echarts.init($('#chart01').get(0));
		var option = {
			baseOption: {
				title: {
					text: '无锡国控监测站点分布图',
					x: 0,
					y: -4,
					textStyle: {
						color: '#64DFEE',
						fontWeight: 'lighter',
						fontSize: 12
					}
				},
				geo: {
					map: 'wuxi',
					roam: false,
					top: '4%',
					zoom: 0.9,
					label: {
						emphasis: {
							textStyle: {
								color: '#FFF'
							}
						}
					},
					itemStyle: {
			            normal: {
			                areaColor: '#323C48',
			                borderColor: '#1F2326'
			            },
			            emphasis: {
			                areaColor: '#156797'
			            }
			        }
				},
				tooltip: {
					formatter: function (params){
						// console.log(params);
						var message = params.name + '<br />' + 'PH： ' + params.value[3] + ' (无量纲)' + '<br />' + '总磷： ' + params.value[4] + ' (mg/l)' + '<br />' + '化学需氧量： ' + params.value[5] + ' (mg/l)' + '<br />' + '氨氮： ' + params.value[6] + ' (mg/l)' + '<br />' + '总氮： ' + params.value[7] + ' (mg/l)';
						return message;
					}
				},
				legend: {
					orient: 'vertical',
			        right: function(){
			        	if (window.screen.width <= 1366) {
			        		return '3%';
			        	}else if (window.screen.width <= 1440) {
			        		return '3%';
			        	}else if (window.screen.width <= 1680) {
			        		return '4%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '4.5%';
			        	}else{
			        		return '5%';
			        	}
			        }(),
			        bottom: '5%',
			        align: 'left',
			        selected: {
			        	'PH': false,
			        	'化学需氧量': false,
			        	'氨氮': false,
			        	'总磷': false,
			        	'总氮': true
			        },
			        selectedMode: 'single',
			        data:['PH','总磷','化学需氧量','氨氮','总氮'],
			        itemGap: function(){
			        	if (window.screen.width <= 1366) {
			        		return 10;
			        	}else if (window.screen.width <= 1440) {
			        		return 14;
			        	}else if (window.screen.width <= 1680) {
			        		return 18;
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return 22;
			        	}else{
			        		return 24;
			        	}
			        }(),
			        itemWidth: 10,
			        itemHeight: 10,
			        inactiveColor: '#555',
			        textStyle: {
			            color: '#FFF',
			            fontSize: 12
			        }
			    },
			    visualMap: {
			    	type: 'piecewise',
			        min: 0,
			        max: 20,
			        precision: 0,
			        left: 0,
			        bottom: '9%',
			        inRange: {
			        	color: ['#3de19a','#2ac4bb','#3dabe1','#3a86ab','#f16643']
			        },
			        itemWidth: '50%',
			        itemHeight: '20%',
			        itemSymbol: 'rect',
			        padding: 0,
			        textGap: -48,
			        itemGap: function(){
			        	if (window.screen.width <= 1366) {
			        		return 6;
			        	}else if (window.screen.width <= 1440) {
			        		return 10;
			        	}else if (window.screen.width <= 1680) {
			        		return 14;
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return 18;
			        	}else{
			        		return 20;
			        	}
			        }(),
			        textStyle: {
			            color: '#FFF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        },
			        dimension: 2
			    },
				timeline: {
					bottom: '8%',
					axisType: 'category',
					autoPlay: false,
					playInterval: 1000,
					data: ['15年01季度','15年02季度','15年03季度','15年04季度'],
					symbol: 'diamond',
					// symbol: 'image://images/timeline04.png',
					symbolSize: 20,
					itemStyle: {
						normal: {
							color: '#101010',
							borderColor: '#3ECAD9',
							borderWidth: 2
						},
						emphasis: {
							color: '#156797'
						}
					},
					label: {
						normal: {
							textStyle: {
								color: '#FFF',
								fontWeight: 'lighter',
								fontSize: 12
							}
						},
						emphasis: {
							textStyle: {
								color: '#FFF'
							}
						}
					},
					lineStyle: {
						show: true,
						color: '#3ECAD9'
					},
					checkpointStyle: {
						symbol: 'diamond',
						color: '#156797',
						borderColor: '#A0DFFE',
						borderWidth: 2
					},
					controlStyle: {
						// itemGap: 30,
						position: 'left',
						normal: {
							color: '#40C9D9',
							borderColor: '#40C9D9'
						},
						emphasis: {
							color: '#A0DFFE',
							borderColor: '#A0DFFE',
							borderWidth: 1
						}
					},
					tooltip: {
						show: false
					}
				},
				series: [
					{
						name: 'PH',
						type: 'scatter',
						coordinateSystem: 'geo',
						markPoint: {
							// slient: true,
							tooltip: {
								show: false
							},
							data: [
								{
									// name: '标记',
									// value: [1,2,3,4,5,6,7,8],
									coord: [120.39686,31.589058],
									symbol: 'image://images/markpoint.png',
									symbolSize: [16,23],
									symbolOffset: [0, '-100%'],
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									}
								}
							]
						},
						data: []
					},
					{
						name: '总磷',
						type: 'scatter',
						coordinateSystem: 'geo',
						markPoint: {
							// slient: true,
							tooltip: {
								show: false
							},
							data: [
								{
									// name: '标记',
									// value: [1,2,3,4,5,6,7,8],
									coord: [120.39686,31.589058],
									symbol: 'image://images/markpoint.png',
									symbolSize: [16,23],
									symbolOffset: [0, '-100%'],
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									}
								}
							]
						},
						data: []
					},
					{
						name: '化学需氧量',
						type: 'scatter',
						coordinateSystem: 'geo',
						markPoint: {
							// slient: true,
							tooltip: {
								show: false
							},
							data: [
								{
									// name: '标记',
									// value: [1,2,3,4,5,6,7,8],
									coord: [120.39686,31.589058],
									symbol: 'image://images/markpoint.png',
									symbolSize: [16,23],
									symbolOffset: [0, '-100%'],
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									}
								}
							]
						},
						data: []
					},
					{
						name: '氨氮',
						type: 'scatter',
						coordinateSystem: 'geo',
						markPoint: {
							// slient: true,
							tooltip: {
								show: false
							},
							data: [
								{
									// name: '标记',
									// value: [1,2,3,4,5,6,7,8],
									coord: [120.39686,31.589058],
									symbol: 'image://images/markpoint.png',
									symbolSize: [16,23],
									symbolOffset: [0, '-100%'],
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									}
								}
							]
						},
						data: []
					},
					{
						name: '总氮',
						type: 'scatter',
						coordinateSystem: 'geo',
						markPoint: {
							// slient: true,
							tooltip: {
								show: false
							},
							data: [
								{
									// name: '标记',
									// value: [1,2,3,4,5,6,7,8],
									coord: [120.39686,31.589058],
									symbol: 'image://images/markpoint.png',
									symbolSize: [16,23],
									symbolOffset: [0, '-100%'],
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									}
								}
							]
						},
						data: []
					}
				]
			},
			
			options: [
				{
					series: [
						{
							name: 'PH',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总磷',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '化学需氧量',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '氨氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						}
					]
				},
				{
					series: [
						{
							name: 'PH',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总磷',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '化学需氧量',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '氨氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						}
					]
				},
				{
					series: [
						{
							name: 'PH',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总磷',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '化学需氧量',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '氨氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							markPoint: {
								symbol: 'pin'
							},
							data: []
						}
					]
				},
				{
					series: [
						{
							name: 'PH',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总磷',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '化学需氧量',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '氨氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						},
						{
							name: '总氮',
							type: 'scatter',
							coordinateSystem: 'geo',
							data: []
						}
					]
				}
			]
			
		};
		wuxiMap.setOption(option);
		var setData = function (){
			var data = function (thetime,thename){
				var resultData = [];
				for (var i = 0; i < thedata[thetime].length; i++) {
					resultData.push({name: thedata[thetime][i].name, value: [thedata[thetime][i].xAxis,thedata[thetime][i].yAxis,thedata[thetime][i][thename],thedata[thetime][i].PH,thedata[thetime][i].总磷,thedata[thetime][i].化学需氧量,thedata[thetime][i].氨氮,thedata[thetime][i].总氮]});
				};
				return resultData;
			};
			wuxiMap.setOption({
				options: [
					{
						series: [
							{
								name: 'PH',
								data: data('201501','PH')
							},
							{
								name: '总磷',
								data: data('201501','总磷')
							},
							{
								name: '化学需氧量',
								data: data('201501','化学需氧量')
							},
							{
								name: '氨氮',
								data: data('201501','氨氮')
							},
							{
								name: '总氮',
								data: data('201501','总氮')
							}
						]
					},
					{
						series: [
							{
								name: 'PH',
								data: data('201502','PH')
							},
							{
								name: '总磷',
								data: data('201502','总磷')
							},
							{
								name: '化学需氧量',
								data: data('201502','化学需氧量')
							},
							{
								name: '氨氮',
								data: data('201502','氨氮')
							},
							{
								name: '总氮',
								data: data('201502','总氮')
							}
						]
					},
					{
						series: [
							{
								name: 'PH',
								data: data('201503','PH')
							},
							{
								name: '总磷',
								data: data('201503','总磷')
							},
							{
								name: '化学需氧量',
								data: data('201503','化学需氧量')
							},
							{
								name: '氨氮',
								data: data('201503','氨氮')
							},
							{
								name: '总氮',
								data: data('201503','总氮')
							}
						]
					},
					{
						series: [
							{
								name: 'PH',
								data: data('201504','PH')
							},
							{
								name: '总磷',
								data: data('201504','总磷')
							},
							{
								name: '化学需氧量',
								data: data('201504','化学需氧量')
							},
							{
								name: '氨氮',
								data: data('201504','氨氮')
							},
							{
								name: '总氮',
								data: data('201504','总氮')
							}
						]
					}
				]
			});
		}();

		var pointDetails = function (){
			wuxiMap.on('click', function (params){
				if (params.componentType === 'series') {
					wuxiMap.setOption({
						baseOption: {
							series: [
								{
									name: 'PH',
									markPoint: {
										// slient: true,
										tooltip: {
											show: false
										},
										data: [
											{
												name: params.name,
												value: params.value,
												coord: [params.value[0],params.value[1]],
												symbol: 'image://images/markpoint.png',
												symbolSize: [16,23],
												symbolOffset: [0, '-100%'],
												label: {
													normal: {
														show: false
													},
													emphasis: {
														show: false
													}
												}
											}
										]
									}
								},
								{
									name: '总磷',
									markPoint: {
										// slient: true,
										tooltip: {
											show: false
										},
										data: [
											{
												name: params.name,
												value: params.value,
												coord: [params.value[0],params.value[1]],
												symbol: 'image://images/markpoint.png',
												symbolSize: [16,23],
												symbolOffset: [0, '-100%'],
												label: {
													normal: {
														show: false
													},
													emphasis: {
														show: false
													}
												}
											}
										]
									}
								},
								{
									name: '化学需氧量',
									markPoint: {
										// slient: true,
										tooltip: {
											show: false
										},
										data: [
											{
												name: params.name,
												value: params.value,
												coord: [params.value[0],params.value[1]],
												symbol: 'image://images/markpoint.png',
												symbolSize: [16,23],
												symbolOffset: [0, '-100%'],
												label: {
													normal: {
														show: false
													},
													emphasis: {
														show: false
													}
												}
											}
										]
									}
								},
								{
									name: '氨氮',
									markPoint: {
										// slient: true,
										tooltip: {
											show: false
										},
										data: [
											{
												name: params.name,
												value: params.value,
												coord: [params.value[0],params.value[1]],
												symbol: 'image://images/markpoint.png',
												symbolSize: [16,23],
												symbolOffset: [0, '-100%'],
												label: {
													normal: {
														show: false
													},
													emphasis: {
														show: false
													}
												}
											}
										]
									}
								},
								{
									name: '总氮',
									markPoint: {
										// slient: true,
										tooltip: {
											show: false
										},
										data: [
											{
												name: params.name,
												value: params.value,
												coord: [params.value[0],params.value[1]],
												symbol: 'image://images/markpoint.png',
												symbolSize: [16,23],
												symbolOffset: [0, '-100%'],
												label: {
													normal: {
														show: false
													},
													emphasis: {
														show: false
													}
												}
											}
										]
									}
								}
							]
						}
					});

					$('#chart02').hide(500,function(){
						$('#chart02').html('');
					});
					$('#chart02').show(500, function (){
						var detailData = echarts.init($('#chart02').get(0));
						var detailOption = {
							title: [
								{
									text: params.name,
									x: 8,
									y: -4,
									textStyle: {
										color: '#5DCDDB',
										fontSize: 12,
										fontWeight: 'lighter'
									}
								},
								{
									text: '2015年01季度',
									x: function(){
							        	if (window.screen.width <= 1366) {
							        		return '4%';
							        	}else if (window.screen.width <= 1440) {
							        		return '4.5%';
							        	}else if (window.screen.width <= 1680) {
							        		return '5.5%';
							        	}
							        	else if (window.screen.width <= 1920) {
							        		return '7%';
							        	}else{
							        		return '7.5%';
							        	}
							        }(),
									y: '9.7%',
									textStyle: {
										color: '#5DCDDB',
										fontSize: 12,
										fontWeight: 'lighter'
									}
								},
								{
									text: '2015年02季度',
									x: function(){
							        	if (window.screen.width <= 1366) {
							        		return '55%';
							        	}else if (window.screen.width <= 1440) {
							        		return '55%';
							        	}else if (window.screen.width <= 1680) {
							        		return '56%';
							        	}
							        	else if (window.screen.width <= 1920) {
							        		return '57%';
							        	}else{
							        		return '57.5%';
							        	}
							        }(),
									y: '9.7%',
									textStyle: {
										color: '#5DCDDB',
										fontSize: 12,
										fontWeight: 'lighter'
									}
								},
								{
									text: '2015年03季度',
									x: function(){
							        	if (window.screen.width <= 1366) {
							        		return '4%';
							        	}else if (window.screen.width <= 1440) {
							        		return '4.5%';
							        	}else if (window.screen.width <= 1680) {
							        		return '5.5%';
							        	}
							        	else if (window.screen.width <= 1920) {
							        		return '7%';
							        	}else{
							        		return '7.5%';
							        	}
							        }(),
									y: '56%',
									textStyle: {
										color: '#5DCDDB',
										fontSize: 12,
										fontWeight: 'lighter'
									}
								},
								{
									text: '2015年04季度',
									x: function(){
							        	if (window.screen.width <= 1366) {
							        		return '55%';
							        	}else if (window.screen.width <= 1440) {
							        		return '55%';
							        	}else if (window.screen.width <= 1680) {
							        		return '56%';
							        	}
							        	else if (window.screen.width <= 1920) {
							        		return '57%';
							        	}else{
							        		return '57.5%';
							        	}
							        }(),
									y: '56%',
									textStyle: {
										color: '#5DCDDB',
										fontSize: 12,
										fontWeight: 'lighter'
									}
								}
							],
						    tooltip: {
						        trigger: 'item'
						    },
							grid: [
								{x: '10%', y: '20%', width: '33%', height: '24%'},
						        {x: '61%', y: '20%', width: '33%', height: '24%'},
						        {x: '10%', y: '66%', width: '33%', height: '24%'},
						        {x: '61%', y: '66%', width: '33%', height: '24%'}
							],
							xAxis: [
								{
				                    type : 'category',
				                    gridIndex: 0,
				                    data : ["PH","总磷","COD","氨氮","总氮"],
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#5DCDDB',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    }
				                },
						        {
				                    type : 'category',
				                    gridIndex: 1,
				                    data : ["PH","总磷","COD","氨氮","总氮"],
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#5DCDDB',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    }
				                },
				                {
				                    type : 'category',
				                    gridIndex: 2,
				                    data : ["PH","总磷","COD","氨氮","总氮"],
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#5DCDDB',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    }
				                },
				                {
				                    type : 'category',
				                    gridIndex: 3,
				                    data : ["PH","总磷","COD","氨氮","总氮"],
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#5DCDDB',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    }
				                }
							],
							yAxis: [
								{
				                    type : 'value',
				                    gridIndex: 0,
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#E9E9E9',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    },
				                    splitLine: {
				                    	lineStyle: {
				                    		color: '#585858'
				                    	}
				                    }
				                },
						        {
				                    type : 'value',
				                    gridIndex: 1,
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#E9E9E9',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    },
				                    splitLine: {
				                    	lineStyle: {
				                    		color: '#585858'
				                    	}
				                    }
				                },
						        {
				                    type : 'value',
				                    gridIndex: 2,
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#E9E9E9',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    },
				                    splitLine: {
				                    	lineStyle: {
				                    		color: '#585858'
				                    	}
				                    }
				                },
						        {
				                    type : 'value',
				                    gridIndex: 3,
				                    axisLine: {
				                    	show: false
				                    },
				                    axisTick: {
				                    	show: false
				                    },
				                    axisLabel: {
				                    	show: true,
				                    	textStyle: {
				                    		color: '#E9E9E9',
				                    		fontSize: 12,
				                    		fontWeight: 'lighter'
				                    	}
				                    },
				                    splitLine: {
				                    	lineStyle: {
				                    		color: '#585858'
				                    	}
				                    }
				                }
							],
							series: [
								{
						            name: '201501',
						            type: 'bar',
						            barWidth: 16,
						            xAxisIndex: 0,
						            yAxisIndex: 0,
						            data: []
						        },
						        {
						            name: '201502',
						            type: 'bar',
						            barWidth: 16,
						            xAxisIndex: 1,
						            yAxisIndex: 1,
						            data: []
						        },
						        {
						            name: '201503',
						            type: 'bar',
						            barWidth: 16,
						            xAxisIndex: 2,
						            yAxisIndex: 2,
						            data: []
						        },
						        {
						            name: '201504',
						            type: 'bar',
						            barWidth: 16,
						            xAxisIndex: 3,
						            yAxisIndex: 3,
						            data: []
						        }
							]
						};
						detailData.setOption(detailOption);
						var setData = function (){
							var data = function (thetime){
								var resultData = [];
								var datakey = ["PH","总磷","化学需氧量","氨氮","总氮"];
								var thecolor = ['#22B6C4','#275064','#F16743','#7DD4FF','#3DAAE2'];
								var thebordercolor = ['#143234','#151D20','#3E211B','#26373F','#192F3A'];
								for (var i = 0; i < thedata[thetime].length; i++) {
									if (thedata[thetime][i].name == params.name) {
										for (var j = 0; j < datakey.length; j++) {
											resultData.push({
												name:datakey[j],
												value:thedata[thetime][i][datakey[j]],
												itemStyle: {
													normal: {
														color: thecolor[j],
									            		borderColor: thebordercolor[j],
									            		borderWidth: 2
													}
												}
											});
										};
									};
								};
								return resultData;
							};
							detailData.setOption({
								series: [
									{
										name: '201501',
										data: data('201501')
									},
									{
										name: '201502',
										data: data('201502')
									},
									{
										name: '201503',
										data: data('201503')
									},
									{
										name: '201504',
										data: data('201504')
									}
								]
							});
						}();
					});
				};
			});
		}();

		var changeVisualMap = function (){
			wuxiMap.on('legendselectchanged', function (params){
				if (params.name == 'PH') {
					wuxiMap.setOption({
						baseOption: {
							visualMap: {
								min: 6,
								max: 8,
			        			precision: 0
							}
						}
					});
				}else if (params.name == '总磷') {
					wuxiMap.setOption({
						baseOption: {
							visualMap: {
								min: 0,
								max: 1,
			        			precision: 0
							}
						}
					});
				}else if (params.name == '化学需氧量') {
					wuxiMap.setOption({
						baseOption: {
							visualMap: {
								min: 0,
								max: 100,
			        			precision: 0
							}
						}
					});
				}else if (params.name == '氨氮') {
					wuxiMap.setOption({
						baseOption: {
							visualMap: {
								min: 0,
								max: 5,
			        			precision: 0
							}
						}
					});
				}else if (params.name == '总氮') {
					wuxiMap.setOption({
						baseOption: {
							visualMap: {
								min: 0,
								max: 20,
			        			precision: 0
							}
						}
					});
				}
			});
		}();
	},

	"chart02": function(thedata){
		var detailData = echarts.init($('#chart02').get(0));
		var detailOption = {
			title: [
				{
					text: '健鼎（无锡）电子有限公司（团结厂）',
					x: 8,
					y: -4,
					textStyle: {
						color: '#5DCDDB',
						fontSize: 12,
						fontWeight: 'lighter'
					}
				},
				{
					text: '2015年01季度',
					x: function(){
			        	if (window.screen.width <= 1366) {
			        		return '4%';
			        	}else if (window.screen.width <= 1440) {
			        		return '4.5%';
			        	}else if (window.screen.width <= 1680) {
			        		return '5.5%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '7%';
			        	}else{
			        		return '7.5%';
			        	}
			        }(),
					y: '9.7%',
					textStyle: {
						color: '#5DCDDB',
						fontSize: 12,
						fontWeight: 'lighter'
					}
				},
				{
					text: '2015年02季度',
					x: function(){
			        	if (window.screen.width <= 1366) {
			        		return '55%';
			        	}else if (window.screen.width <= 1440) {
			        		return '55%';
			        	}else if (window.screen.width <= 1680) {
			        		return '56%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '57%';
			        	}else{
			        		return '57.5%';
			        	}
			        }(),
					y: '9.7%',
					textStyle: {
						color: '#5DCDDB',
						fontSize: 12,
						fontWeight: 'lighter'
					}
				},
				{
					text: '2015年03季度',
					x: function(){
			        	if (window.screen.width <= 1366) {
			        		return '4%';
			        	}else if (window.screen.width <= 1440) {
			        		return '4.5%';
			        	}else if (window.screen.width <= 1680) {
			        		return '5.5%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '7%';
			        	}else{
			        		return '7.5%';
			        	}
			        }(),
					y: '56%',
					textStyle: {
						color: '#5DCDDB',
						fontSize: 12,
						fontWeight: 'lighter'
					}
				},
				{
					text: '2015年04季度',
					x: function(){
			        	if (window.screen.width <= 1366) {
			        		return '55%';
			        	}else if (window.screen.width <= 1440) {
			        		return '55%';
			        	}else if (window.screen.width <= 1680) {
			        		return '56%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '57%';
			        	}else{
			        		return '57.5%';
			        	}
			        }(),
					y: '56%',
					textStyle: {
						color: '#5DCDDB',
						fontSize: 12,
						fontWeight: 'lighter'
					}
				}
			],
		    tooltip: {
		        trigger: 'item'
		    },
			grid: [
				{x: '10%', y: '20%', width: '33%', height: '24%'},
		        {x: '61%', y: '20%', width: '33%', height: '24%'},
		        {x: '10%', y: '66%', width: '33%', height: '24%'},
		        {x: '61%', y: '66%', width: '33%', height: '24%'}
			],
			xAxis: [
				{
                    type : 'category',
                    gridIndex: 0,
                    data : ["PH","总磷","COD","氨氮","总氮"],
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#5DCDDB',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    }
                },
		        {
                    type : 'category',
                    gridIndex: 1,
                    data : ["PH","总磷","COD","氨氮","总氮"],
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#5DCDDB',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    }
                },
                {
                    type : 'category',
                    gridIndex: 2,
                    data : ["PH","总磷","COD","氨氮","总氮"],
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#5DCDDB',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    }
                },
                {
                    type : 'category',
                    gridIndex: 3,
                    data : ["PH","总磷","COD","氨氮","总氮"],
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#5DCDDB',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    }
                }
			],
			yAxis: [
				{
                    type : 'value',
                    gridIndex: 0,
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#E9E9E9',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    },
                    splitLine: {
                    	lineStyle: {
                    		color: '#585858'
                    	}
                    }
                },
		        {
                    type : 'value',
                    gridIndex: 1,
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#E9E9E9',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    },
                    splitLine: {
                    	lineStyle: {
                    		color: '#585858'
                    	}
                    }
                },
		        {
                    type : 'value',
                    gridIndex: 2,
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#E9E9E9',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    },
                    splitLine: {
                    	lineStyle: {
                    		color: '#585858'
                    	}
                    }
                },
		        {
                    type : 'value',
                    gridIndex: 3,
                    axisLine: {
                    	show: false
                    },
                    axisTick: {
                    	show: false
                    },
                    axisLabel: {
                    	show: true,
                    	textStyle: {
                    		color: '#E9E9E9',
                    		fontSize: 12,
                    		fontWeight: 'lighter'
                    	}
                    },
                    splitLine: {
                    	lineStyle: {
                    		color: '#585858'
                    	}
                    }
                }
			],
			series: [
				{
		            name: '201501',
		            type: 'bar',
		            barWidth: 16,
		            xAxisIndex: 0,
		            yAxisIndex: 0,
		            data: []
		        },
		        {
		            name: '201502',
		            type: 'bar',
		            barWidth: 16,
		            xAxisIndex: 1,
		            yAxisIndex: 1,
		            data: []
		        },
		        {
		            name: '201503',
		            type: 'bar',
		            barWidth: 16,
		            xAxisIndex: 2,
		            yAxisIndex: 2,
		            data: []
		        },
		        {
		            name: '201504',
		            type: 'bar',
		            barWidth: 16,
		            xAxisIndex: 3,
		            yAxisIndex: 3,
		            data: []
		        }
			]
		};
		detailData.setOption(detailOption);

		var setData = function (){
			var data = function (thetime){
				var resultData = [];
				var datakey = ["PH","总磷","化学需氧量","氨氮","总氮"];
				var thecolor = ['#22B6C4','#275064','#F16743','#7DD4FF','#3DAAE2'];
				var thebordercolor = ['#143234','#151D20','#3E211B','#26373F','#192F3A'];
				for (var i = 0; i < datakey.length; i++) {
					resultData.push({
						name:datakey[i],
						value:thedata[thetime][0][datakey[i]],
						itemStyle: {
							normal: {
								color: thecolor[i],
			            		borderColor: thebordercolor[i],
			            		borderWidth: 2
							}
						}
					});
				};
				return resultData;
			};
			detailData.setOption({
				series: [
					{
						name: '201501',
						data: data('201501')
					},
					{
						name: '201502',
						data: data('201502')
					},
					{
						name: '201503',
						data: data('201503')
					},
					{
						name: '201504',
						data: data('201504')
					}
				]
			});
		}();
	}
};