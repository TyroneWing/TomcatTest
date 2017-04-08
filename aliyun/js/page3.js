var page3 = {
	"getData": function (){
		$.ajax({
			type: "get",
			url: "./json/riverData.json",
			dataType: "json",
			success: function (thedata){
				page3.chart04(thedata);
				page3.chart05(thedata);
				page3.chart06(thedata);
			}
		});
	},

	"chart04": function (thedata){
		var taihuChart = echarts.init($('#chart04').get(0));
		var option = {
		    title: {
		        text: '太湖历年水质情况',
		        subtext: '单位（mg/l）',
		        itemGap: 6,
		        subtextStyle: {
		        	color: '#989898',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        },
		        left: 'center',
		        textStyle: {
		            color: '#65E7F5',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        }
		    },
		    legend: {
		        left: function(){
		        	if (window.screen.width <= 1366) {
		        		return '3%';
		        	}else if (window.screen.width <= 1440) {
		        		return '3.2%';
		        	}else if (window.screen.width <= 1680) {
		        		return '3.8%';
		        	}
		        	else if (window.screen.width <= 1920) {
		        		return '4.4%';
		        	}else{
		        		return '4.5%';
		        	}
		        }(),
		        top: '32.5%',
		        orient: 'vertical',
		        data: [
		        	{
		        		name: '2015',
		        		icon: 'diamond'
		        	},
		        	{
		        		name: '2014',
		        		icon: 'diamond'
		        	},
		        	{
		        		name: '2013',
		        		icon: 'diamond'
		        	},
		        	{
		        		name: '2012',
		        		icon: 'diamond'
		        	},
		        	{
		        		name: '2011',
		        		icon: 'diamond'
		        	},
		        	{
		        		name: '2010',
		        		icon: 'diamond'
		        	}
		        ],
		        itemGap: function(){
		        	if (window.screen.width <= 1366) {
		        		return 28;
		        	}else if (window.screen.width <= 1440) {
		        		return 37;
		        	}else if (window.screen.width <= 1680) {
		        		return 47;
		        	}
		        	else if (window.screen.width <= 1920) {
		        		return 50;
		        	}else{
		        		return 52;
		        	}
		        }(),
		        itemWidth: 14,
		        inactiveColor: '#9B9B9B',
		        textStyle: {
		            color: '#EEE',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        }
		    },
		    tooltip: {
		        show: true
		    },
		    radar: {
		    	radius: '52%',
		        indicator: [
		            {name: '总氮', max: 3},
		            {name: '氨氮*10', max: 3},
		            {name: '总磷*30', max: 3},
		            {name: '综合营养状态指数/10', max: 7},
		            {name: '叶绿素a*100', max: 3},
		            {name: '化学需氧量/10', max: 3}
		        ],
		        shape: 'circle',
		        splitNumber: 6,
		        name: {
		            textStyle: {
		                color: '#6AE5F4',
		                fontWeight: 'lighter',
		                fontSize: 12
		            }
		        },
		        splitLine: {
		            lineStyle: {
		                color: [
		                    'rgba(120,120,120,0.3)', 'rgba(120,120,120,0.4)',
		                    'rgba(120,120,120,0.5)', 'rgba(120,120,120,0.6)',
		                    'rgba(120,120,120,0.7)', 'rgba(120,120,120,0.8)', 
		                    'rgba(120,120,120,0.9)'
		                ].reverse()
		            }
		        },
		        splitArea: {
		            show: false
		        },
		        axisLine: {
		            lineStyle: {
		                color: 'rgba(180,180,180,0.5)'
		            }
		        }
		    },
		    series: [
		        {
		            name: '2015',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '2014',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '2013',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '2012',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '2011',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '2010',
		            type: 'radar',
		            lineStyle: {
					    normal: {
					        // width: 1,
					        opacity: 0.5
				    	}
				    },
		            data: [],
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        }
		    ]
		};
		taihuChart.setOption(option);

		var setData = function (){

			var data = function (thetime,thecolor){
				var resultData = [];
				var temporaryData = [];
				for (var key in thedata.taihu) {
					if (key == thetime) {
						for (var thekey in thedata.taihu[thetime]) {
							temporaryData.push(thedata.taihu[thetime][thekey]);
						}
					}
				};
				resultData.push({
					value: temporaryData
					// itemStyle: {
					// 	normal: {
					// 		color: thecolor
					// 	}
					// }
				});
				return resultData;
			};

			taihuChart.setOption({
				series: [
					{
						name: '2015',
						data: data('2015','#22B6C4')
					},
					{
						name: '2014',
						data: data('2014','#275064')
					},
					{
						name: '2013',
						data: data('2013','#F16743')
					},
					{
						name: '2012',
						data: data('2012','#7DD4FF')
					},
					{
						name: '2011',
						data: data('2011','#3DAAE2')
					},
					{
						name: '2010',
						data: data('2010','#1CA261')
					}
				]
			});
		}();
	},

	"chart05": function (thedata){
		var accessChart = echarts.init($('#chart05').get(0));
		var option = {
			title: {
				text: '13条主要出入湖河水质情况',
		        left: 'center',
		        top: '2%',
		        textStyle: {
		            color: '#65E0EF',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        }
			},
		    toolbox: {
		        show : true,
		        top: '2%',
		        right: '1%',
		        feature : {
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true}
		        },
		        iconStyle: {
					normal: {
						borderColor: '#9B9B9B'
					}
				}
		    },
			legend: {
				top: '9%',
				textStyle: {
					color: '#9B9B9B'
				},
				data: ['II~III','IV','V','劣V']
			},
			tooltip: {
				trigger: 'axis'
			},
		    grid: {
		        x: '10%',
		        y: '25%',
		        width: '80%',
		        height: '60%'
		    },
			xAxis: [
				{
					// name: '（年份）',
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
			yAxis: {
				name: '（条）',
				nameTextStyle: {
					color: '#9B9B9B'
				},
				splitNumber: 4,
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
			},
			series: [
				{
					name: 'II~III',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#22B6C4'
						}
					},
					data: []
				},
				{
					name: 'IV',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#275064'
						}
					},
					data: []
				},
				{
					name: 'V',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#F16743'
						}
					},
					data: []
				},
				{
					name: '劣V',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#7DD4FF'
						}
					},
					data: []
				}
			]
		};
		accessChart.setOption(option);

		var setData = function (){
			var data = function (theMold){
				var resultData = [];
				for (var key in thedata.accessRiver) {
					resultData.push(thedata.accessRiver[key][theMold]);
				};
				return resultData;
			};

			accessChart.setOption({
				series: [
					{
						name: 'II~III',
						data: data('II~III')
					},
					{
						name: 'IV',
						data: data('IV')
					},
					{
						name: 'V',
						data: data('V')
					},
					{
						name: '劣V',
						data: data('劣V')
					}
				]
			});
		}();
	},

	"chart06": function (thedata){
		var accessChart = echarts.init($('#chart06').get(0));
		var option = {
			title: {
				text: '34条主要湖河水质情况',
		        left: 'center',
		        top: '2%',
		        textStyle: {
		            color: '#65E0EF',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        }
			},
		    toolbox: {
		        show : true,
		        top: '2%',
		        right: '1%',
		        feature : {
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true}
		        },
		        iconStyle: {
					normal: {
						borderColor: '#9B9B9B'
					}
				}
		    },
			legend: {
				top: '9%',
				textStyle: {
					color: '#9B9B9B'
				},
				data: ['II~III','IV','V','劣V']
			},
			tooltip: {
				trigger: 'axis'
			},
		    grid: {
		        x: '10%',
		        y: '25%',
		        width: '80%',
		        height: '60%'
		    },
			xAxis: [
				{
					// name: '（年份）',
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
			yAxis: {
				name: '（条）',
				nameTextStyle: {
					color: '#9B9B9B'
				},
				splitNumber: 4,
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
			},
			series: [
				{
					name: 'II~III',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#22B6C4'
						}
					},
					data: []
				},
				{
					name: 'IV',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#275064'
						}
					},
					data: []
				},
				{
					name: 'V',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#F16743'
						}
					},
					data: []
				},
				{
					name: '劣V',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#7DD4FF'
						}
					},
					data: []
				}
			]
		};
		accessChart.setOption(option);

		var setData = function (){
			var data = function (theMold){
				var resultData = [];
				for (var key in thedata.mainRiver) {
					resultData.push(thedata.mainRiver[key][theMold]);
				};
				return resultData;
			};

			accessChart.setOption({
				series: [
					{
						name: 'II~III',
						data: data('II~III')
					},
					{
						name: 'IV',
						data: data('IV')
					},
					{
						name: 'V',
						data: data('V')
					},
					{
						name: '劣V',
						data: data('劣V')
					}
				]
			});
		}();
	}
};