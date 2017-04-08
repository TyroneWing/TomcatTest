var page2 = {
	"getData": function (){
		$.ajax({
			type: "get",
			url: "./json/monitorData.json",
			dataType: "json",
			success: function (thedata){
				page2.chart03(thedata);
			}
		});
	},

	"chart03": function (thedata){
		var linesChart = echarts.init($('#chart03').get(0));
		var option = {
			title: [
				{
					text: '监测值线性关系',
					left: 6,
					top: 6,
					textStyle: {
			            color: '#67E1F0',
			            fontSize: 14,
			            fontWeight: 'normal'
			        }
				},
			],
			toolbox: {
				top: '2%',
				right: '1%',
				iconStyle: {
					normal: {
						borderColor: '#22B6C4'
					}
				}
			},
			brush: {
		        brushLink: 'all',
		        xAxisIndex: [],
		        yAxisIndex: [],
		        inBrush: {
		            opacity: 1
		        }
		    },
			visualMap: {
		        type: 'piecewise',
		        categories: ["第一季度","第二季度","第三季度","第四季度"],
		        textStyle: {
		        	color: '#ccc'
		        },
		        // dimension: 5,
		        orient: 'horizontal',
		        top: function(){
		        	if (window.screen.width <= 1366) {
		        		return '3%';
		        	}else if (window.screen.width <= 1440) {
		        		return '3.2%';
		        	}else if (window.screen.width <= 1680) {
		        		return '3.6%';
		        	}
		        	else if (window.screen.width <= 1920) {
		        		return '3.8%';
		        	}else{
		        		return '4%';
		        	}
		        }(),
		        left: 'center',
		        itemSymbol: 'rect',
		        itemGap: 80,
		        textGap: 5,
		        inRange: {
		            color: ['#22B6C4','#275064','#F16743','#7DD4FF']
		        },
		        // outOfRange: {
		        //     opacity: 0
		        // },
		        seriesIndex: [0,1,2,3,4,5,6,7,8,9,10]
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    parallelAxis: [
		        {dim: 0, name: 'PH'},
		        {dim: 1, name: '总磷'},
		        {dim: 2, name: '化学需氧量'},
		        {dim: 3, name: '氨氮'},
		        {dim: 4, name: '总氮'}
		    ],
		    parallel: {
		        bottom: '5%',
		        left: '4%',
		        height: '30%',
		        width: '43%',
		        parallelAxisDefault: {
		            type: 'value',
		            name: '线性关系',
		            nameLocation: 'end',
		            nameGap: 20,
		            splitNumber: 3,
		            nameTextStyle: {
		            	color: '#65DFEE',
		                fontSize: 12
		            },
		            axisLine: {
		                lineStyle: {
		                    color: '#707070'
		                }
		            },
		            axisTick: {
		                lineStyle: {
		                    color: '#707070'
		                }
		            },
		            splitLine: {
		                show: false
		            },
		            axisLabel: {
		                textStyle: {
		                    color: '#65DFEE'
		                }
		            }
		        }
		    },
		    grid: [
		        {x: '8%', y: '15%', width: '20%', height: '17%'},
		        {x: '30%', y: '15%', width: '20%', height: '17%'},
		        {x: '52%', y: '15%', width: '20%', height: '17%'},
		        {x: '74%', y: '15%', width: '20%', height: '17%'},
		        {x: '30%', y: '36%', width: '20%', height: '17%'},
		        {x: '52%', y: '36%', width: '20%', height: '17%'},
		        {x: '74%', y: '36%', width: '20%', height: '17%'},
		        {x: '52%', y: '57%', width: '20%', height: '17%'},
		        {x: '74%', y: '57%', width: '20%', height: '17%'},
		        {x: '74%', y: '78%', width: '20%', height: '17%'}
		    ],
		    xAxis: [
		    	{
		    		splitNumber: 3,
		    		name: 'PH',
		    		nameLocation: 'middle',
		    		nameGap: 5,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 0,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: '总磷',
		    		nameLocation: 'middle',
		    		nameGap: 5,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 1,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: '化学需氧量（COD）',
		    		nameLocation: 'middle',
		    		nameGap: 5,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 2,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: '氨氮',
		    		nameLocation: 'middle',
		    		nameGap: 5,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 3,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 4,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 5,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 6,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 7,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 8,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'top',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 9,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	}
		    ],
		    yAxis: [
		    	{
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 0,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 1,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 2,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: '总氮',
		    		nameLocation: 'middle',
		    		nameGap: 10,
		    		nameRotate: 0,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 3,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 4,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 5,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: 'PH',
		    		nameLocation: 'middle',
		    		nameGap: 10,
		    		nameRotate: 0,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 6,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 7,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: '总磷',
		    		nameLocation: 'middle',
		    		nameGap: 10,
		    		nameRotate: 0,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		type: 'value',
		    		gridIndex: 8,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	},
		        {
		    		splitNumber: 3,
		    		name: 'COD',
		    		nameLocation: 'middle',
		    		nameGap: 10,
		    		nameRotate: 0,
		    		nameTextStyle: {
		    			color: '#62E0EF'
		    		},
		    		position: 'right',
		    		axisLine: {
		    			show: false
		    		},
		    		axisTick: {
		    			show: false
		    		},
		    		axisLabel: {
		    			show: false
		    		},
		    		// splitLine: {
		    		// 	show: false
		    		// },
		    		type: 'value',
		    		gridIndex: 9,
		    		scale: true,
                    splitLine: {
                    	lineStyle: {
                    		color: '#414141'
                    	}
                    }
		    	}
		    ],
		    series: [
		        {
		            name: 'PH+总磷+化学需氧量+氨氮+总氮',
		            type: 'parallel',
		            smooth: true,
		            lineStyle: {
		                normal: {
		                    width: 1,
		                    opacity: 0.5
		                }
		            },
		            data: []
		        },
		        {
		            name: 'PH+总氮',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 0,
		            yAxisIndex: 0,
		            data: []
		        },
		        {
		            name: '总磷+总氮',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 1,
		            yAxisIndex: 1,
		            data: []
		        },
		        {
		            name: '化学需氧量+总氮',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 2,
		            yAxisIndex: 2,
		            data: []
		        },
		        {
		            name: '氨氮+总氮',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 3,
		            yAxisIndex: 3,
		            data: []
		        },
		        {
		            name: '总磷+PH',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 4,
		            yAxisIndex: 4,
		            data: []
		        },
		        {
		            name: '化学需氧量+PH',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 5,
		            yAxisIndex: 5,
		            data: []
		        },
		        {
		            name: '氨氮+PH',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 6,
		            yAxisIndex: 6,
		            data: []
		        },
		        {
		            name: '化学需氧量+总磷',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 7,
		            yAxisIndex: 7,
		            data: []
		        },
		        {
		            name: '氨氮+总磷',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 8,
		            yAxisIndex: 8,
		            data: []
		        },
		        {
		            name: '氨氮+化学需氧量',
		            type: 'scatter',
		            symbolSize: 5,
		            xAxisIndex: 9,
		            yAxisIndex: 9,
		            data: []
		        }
		    ]
		};
		linesChart.setOption(option);

		var setData = function (){
			var array2 = ['201501','201502','201503','201504'];
			var data = function (array1){
				var resultData = [];
				var temporaryData = [];
				for (var i = 0; i < array2.length; i++) {
					for (var k = 0; k < thedata[array2[i]].length; k++) {
						for (var j = 0; j < array1.length; j++) {
							temporaryData.push(thedata[array2[i]][k][array1[j]]);
						};
						if (array2[i] == 201501) {
							temporaryData.push('第一季度');
							resultData.push(temporaryData);
							temporaryData = [];
						}else if (array2[i] == 201502) {
							temporaryData.push('第二季度');
							resultData.push(temporaryData);
							temporaryData = [];
						}else if (array2[i] == 201503) {
							temporaryData.push('第三季度');
							resultData.push(temporaryData);
							temporaryData = [];
						}else if (array2[i] == 201504) {
							temporaryData.push('第四季度');
							resultData.push(temporaryData);
							temporaryData = [];
						};
					};
				};
				return resultData;
			};

			linesChart.setOption({
				series: [
					{
						name: 'PH+总磷+化学需氧量+氨氮+总氮',
						data: data(['PH','总磷','化学需氧量','氨氮','总氮'])
					},
					{
						name: 'PH+总氮',
						data: data(['PH','总氮'])
					},
					{
						name: '总磷+总氮',
						data: data(['总磷','总氮'])
					},
					{
						name: '化学需氧量+总氮',
						data: data(['化学需氧量','总氮'])
					},
					{
						name: '氨氮+总氮',
						data: data(['氨氮','总氮'])
					},
					{
						name: '总磷+PH',
						data: data(['总磷','PH'])
					},
					{
						name: '化学需氧量+PH',
						data: data(['化学需氧量','PH'])
					},
					{
						name: '氨氮+PH',
						data: data(['氨氮','PH'])
					},
					{
						name: '化学需氧量+总磷',
						data: data(['化学需氧量','总磷'])
					},
					{
						name: '氨氮+总磷',
						data: data(['氨氮','总磷'])
					},
					{
						name: '氨氮+化学需氧量',
						data: data(['氨氮','化学需氧量'])
					}
				]
			});
		}();
	}
};