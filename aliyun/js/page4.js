var page4 = {
	"getData": function (){
		$.ajax({
			type: "get",
			url: "./json/runningWaterData.json",
			dataType: "json",
			success: function (thedata){
				page4.chart07(thedata);
			}
		});
	},

	"chart07": function (thedata){
		var runningWaterChart = echarts.init($('#chart07').get(0));
		var option = {
			title: [
				{
					text: '无锡市历年自来水情况',
			        x: function(){
		        	if (window.screen.width <= 1366) {
		        		return '9.5%';
		        	}else if (window.screen.width <= 1440) {
		        		return '10%';
		        	}else if (window.screen.width <= 1680) {
		        		return '11%';
		        	}
		        	else if (window.screen.width <= 1920) {
		        		return '11.5%';
		        	}else{
		        		return '12.5%';
		        	}
		        }(),
			        y: '4%',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2010',
			        x: '12.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2011',
			        x: '27.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2012',
			        x: '41.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2013',
			        x: '55.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2014',
			        x: '69.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				},
				{
					text: '2015',
			        x: '83.5%',
			        y: '91%',
			        textAlign: 'center',
			        textStyle: {
			            color: '#65E0EF',
			            fontSize: 12,
			            fontWeight: 'lighter'
			        }
				}
			],
			tooltip : [
				{
			        trigger: 'axis',
			        axisPointer : {
			            type : 'shadow',
			            shadowStyle: {
			            	color: '#686868',
			            	opacity: 0.1
			            }
			        }
			    }
		    ],
		    toolbox: {
		        show : true,
		        top: '4%',
		        right: '3%',
		        feature : {
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true}
		        },
		        iconStyle: {
					normal: {
						borderColor: '#C1C1C1'
					}
				}
		    },
		    legend: {
		    	top: '4%',
		    	textStyle: {
		    		color: '#C1C1C1'
		    	},
		    	itemWidth: 14,
		    	itemHeight: 14,
		    	itemGap: 58,
		    	icon: 'rect',
		        data:[
		        	{
		        		name: '理论年度总产水量'
		        	},
		        	{
		        		name: '实际供水总量'
		        	},
		        	{
		        		name: '生产总用量'
		        	},
		        	{
		        		name: '生活总用量'
		        	},
		        	{
		        		name: '其它总用量'
		        	}
		        ]
		    },
		    grid: {
		        width: '84%',
		        height: '50%',
		        x: '8%',
		        y: '14%'
		    },
		    xAxis : [
		        {
		        	name: '（年份）',
					nameTextStyle: {
						color: '#9B9B9B'
					},
		            type: 'category',
					axisLine: {
	                	lineStyle: {
	                		color: '#383838'
	                	}
	                },
	                axisLabel: {
	                	textStyle: {
	                		color: '#9B9B9B'
	                	}
	                },
		            data: ['2010','2011','2012','2013','2014','2015']
		        }
		    ],
		    yAxis : [
		        {
		        	name: '（万吨）',
					nameTextStyle: {
						color: '#9B9B9B'
					},
					splitNumber: 3,
					splitLine: {
						lineStyle: {
							color: '#383838'
						}
					},
					axisLine: {
	                	lineStyle: {
	                		color: '#383838'
	                	}
	                },
	                axisLabel: {
	                	textStyle: {
	                		color: '#9B9B9B'
	                	}
	                },
		            type: 'value'
		        }
		    ],
		    series : [
		        {
		            name:'理论年度总产水量',
		            type:'bar',
		            barWidth: 16,
		            itemStyle: {
		            	normal: {
		            		color: '#6CF1FF',
		            		borderColor: '#153134',
		            		borderWidth: 2
		            	}
		            },
		            data:[]
		        },
		        {
		            name:'实际供水总量',
		            type:'bar',
		            barWidth: 16,
		            itemStyle: {
		            	normal: {
		            		color: '#275064',
		            		borderColor: '#151D20',
		            		borderWidth: 2
		            	}
		            },
		            data:[]
		        },
		        {
		            name:'生产总用量',
		            type:'bar',
		            barWidth: 16,
		            itemStyle: {
		            	normal: {
		            		color: '#F16743',
		            		borderColor: '#3E211B',
		            		borderWidth: 2
		            	}
		            },
		            // stack: '实际供水总量',
		            data:[]
		        },
		        {
		            name:'生活总用量',
		            type:'bar',
		            barWidth: 16,
		            itemStyle: {
		            	normal: {
		            		color: '#7DD4FF',
		            		borderColor: '#192F3A',
		            		borderWidth: 2
		            	}
		            },
		            // stack: '实际供水总量',
		            data:[]
		        },
		        {
		            name:'其它总用量',
		            type:'bar',
		            barWidth: 16,
		            itemStyle: {
		            	normal: {
		            		color: '#3DAAE2',
		            		borderColor: '#192F3A',
		            		borderWidth: 2
		            	}
		            },
		            // stack: '实际供水总量',
		            data:[]
		        },
		        {
		            name:'2010年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['13%', '84%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType: 'area',
		            data:[]
		        },
		        {
		            name:'2011年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['28%', '84%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType: 'area',
		            data:[]
		        },
		        {
		            name:'2012年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['42%', '84%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType: 'area',
		            data:[]
		        },
		        {
		            name:'2013年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['56%', '84%'],
		            label:{
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType:'area',
		            data:[]
		        },
		        {
		            name:'2014年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['70%', '84%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType: 'area',
		            data:[]
		        },
		        {
		            name:'2015年自来水使用占比',
		            tooltip: {
		            	trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
		            },
		            type:'pie',
		            radius: [14, 60],
		            center: ['84%', '84%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle: {
		                    	color: '#FFF',
		                    	fontWeight: 'lighter'
		                    }
		                }
		            },
		            roseType: 'area',
		            data:[]
		        },
		    ]
		};
		runningWaterChart.setOption(option);

		var setData = function (){
			var data = function (thename){
				var resultData = [];
				for (var key in thedata.runningWater) {
					resultData.push(thedata.runningWater[key][thename]);
				};
				return resultData;
			};

			var dataPie = function (thename){
				var resultData = [];
				for (var key in thedata.runningWater) {
					if (key == thename) {
						resultData.push({
							value:thedata.runningWater[thename].生活总用量,
							name:"生活",
							itemStyle: {
								normal: {
									color: '#7DD4FF'
								}
							}
						});
						resultData.push({
							value:thedata.runningWater[thename].其它总用量,
							name:"其它",
							itemStyle: {
								normal: {
									color: '#3DAAE2'
								}
							}
						});
						resultData.push({
							value:thedata.runningWater[thename].生产总用量,
							name:"生产",
							itemStyle: {
								normal: {
									color: '#F16743'
								}
							}
						});
					};
				};
				return resultData;
			};

			runningWaterChart.setOption({
				series: [
					{
						name: '理论年度总产水量',
						data: data('理论年度总产水量')
					},
					{
						name: '实际供水总量',
						data: data('实际供水总量')
					},
					{
						name: '生产总用量',
						data: data('生产总用量')
					},
					{
						name: '生活总用量',
						data: data('生活总用量')
					},
					{
						name: '其它总用量',
						data: data('其它总用量')
					},
					{
						name: '2010年自来水使用占比',
						data: dataPie('2010')
					},
					{
						name: '2011年自来水使用占比',
						data: dataPie('2011')
					},
					{
						name: '2012年自来水使用占比',
						data: dataPie('2012')
					},
					{
						name: '2013年自来水使用占比',
						data: dataPie('2013')
					},
					{
						name: '2014年自来水使用占比',
						data: dataPie('2014')
					},
					{
						name: '2015年自来水使用占比',
						data: dataPie('2015')
					}
				]
			});
		}();
	}
};