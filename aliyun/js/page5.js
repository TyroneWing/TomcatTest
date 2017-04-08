var page5 = {
	"getData": function (){
		$.ajax({
			type: "get",
			url: "./json/effluentData.json",
			dataType: "json",
			success: function (thedata){
				page5.chart08(thedata);
				page5.chart0801(thedata);
				page5.chart09(thedata);
			}
		});
	},

	"chart08": function (thedata){
		var effluentChart = echarts.init($('#chart08').get(0));
		var option = {
			title: {
				text: '全市历年废水排放情况',
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
				top: '12%',
				textStyle: {
					color: '#9B9B9B'
				},
				data: [
					'全市废水排放总量（亿吨）',
					'工业废水排放总量（亿吨）',
					'生活污水排放总量（亿吨）',
					'COD排放总量（万吨）',
					'氨氮排放总量（万吨）'
				]
			},
			tooltip: {
				trigger: 'axis'
			},
		    grid: {
		        x: '10%',
		        y: '36%',
		        width: '80%',
		        height: '54%'
		    },
			xAxis: [
				{
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
					name: '全市废水排放总量（亿吨）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#22B6C4'
						}
					},
					data: []
				},
				{
					name: '工业废水排放总量（亿吨）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#275064'
						}
					},
					data: []
				},
				{
					name: '生活污水排放总量（亿吨）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#F16743'
						}
					},
					data: []
				},
				{
					name: 'COD排放总量（万吨）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#7DD4FF'
						}
					},
					data: []
				},
				{
					name: '氨氮排放总量（万吨）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#3DAAE2'
						}
					},
					data: []
				}
			]
		};
		effluentChart.setOption(option);

		var setData = function (){
			var data = function (thename){
				var resultData = [];
				for (var key in thedata.effluentWater) {
					resultData.push(thedata.effluentWater[key][thename]);
				};
				return resultData;
			};

			effluentChart.setOption({
				series: [
					{
						name: '全市废水排放总量（亿吨）',
						data: data('全市废水排放总量')
					},
					{
						name: '工业废水排放总量（亿吨）',
						data: data('工业废水排放总量')
					},
					{
						name: '生活污水排放总量（亿吨）',
						data: data('生活污水排放总量')
					},
					{
						name: 'COD排放总量（万吨）',
						data: data('化学需氧量排放总量')
					},
					{
						name: '氨氮排放总量（万吨）',
						data: data('氨氮排放总量')
					}
				]
			});
		}();
	},

	"chart0801": function (thedata){
		var effluentChart = echarts.init($('#chart0801').get(0));
		var option = {
			title: {
				text: '历年GDP对比关系',
		        left: 'center',
		        top: '7%',
		        textStyle: {
		            color: '#65E0EF',
		            fontSize: 12,
		            fontWeight: 'lighter'
		        }
			},
		    toolbox: {
		        show : true,
		        top: '7%',
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
				top: '15%',
				textStyle: {
					color: '#9B9B9B'
				},
				data: ['单位GDP排放强度（kg/万）','地方年度GDP（万亿）']
			},
			tooltip: {
				trigger: 'axis'
			},
		    grid: {
		        x: '10%',
		        y: '30%',
		        width: '80%',
		        height: '60%'
		    },
			xAxis: [
				{
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
			},
			series: [
				{
					name: '单位GDP排放强度（kg/万）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#22B6C4'
						}
					},
					data: []
				},
				{
					name: '地方年度GDP（万亿）',
					type: 'line',
					itemStyle: {
						normal: {
							color: '#275064'
						}
					},
					data: []
				}
			]
		};
		effluentChart.setOption(option);

		var setData = function (){
			var data = function (thename){
				var resultData = [];
				for (var key in thedata.effluentWater) {
					resultData.push(thedata.effluentWater[key][thename]);
				};
				return resultData;
			};

			effluentChart.setOption({
				series: [
					{
						name: '单位GDP排放强度（kg/万）',
						data: data('单位GDP排放强度')
					},
					{
						name: '地方年度GDP（万亿）',
						data: data('地方年度GDP')
					}
				]
			});
		}();
	},

	"chart09": function (thedata){
		var codanChart = echarts.init($('#chart09').get(0));
		var option = {
			baseOption: {
				title : [
					{
				        text: '历年污水排放占比',
				        left: 'center',
		        		top: '2%',
				        textStyle: {
				            color: '#65E0EF',
				            fontSize: 12,
				            fontWeight: 'lighter'
				        }
				    },
				    {
				        text: 'COD排放总量（万吨）',
				        x: '10%',
				        y: '46%',
				        textStyle: {
				            color: '#65E0EF',
				            fontSize: 12,
				            fontWeight: 'lighter'
				        }
				    },
				    {
				        text: '氨氮排放总量（万吨）',
				        x: '54%',
				        y: '46%',
				        textStyle: {
				            color: '#65E0EF',
				            fontSize: 12,
				            fontWeight: 'lighter'
				        }
				    },
				    {
				        text: '污水排放总量（亿吨）',
				        x: '33%',
				        y: '77%',
				        textStyle: {
				            color: '#65E0EF',
				            fontSize: 12,
				            fontWeight: 'lighter'
				        }
				    }
			    ],
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        right: function(){
			        	if (window.screen.width <= 1366) {
			        		return '1%';
			        	}else if (window.screen.width <= 1440) {
			        		return '1.2%';
			        	}else if (window.screen.width <= 1680) {
			        		return '1.8%';
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return '2.4%';
			        	}else{
			        		return '2.5%';
			        	}
			        }(),
			        top: '35%',
			        orient: 'vertical',
			        data: [
			        	{
			        		name: '工业排放',
			        		icon: 'diamond'
			        	},
			        	{
			        		name: '生活排放',
			        		icon: 'diamond'
			        	},
			        	{
			        		name: '工业源',
			        		icon: 'diamond'
			        	},
			        	{
			        		name: '农业源',
			        		icon: 'diamond'
			        	},
			        	{
			        		name: '生活源',
		        		icon: 'diamond'
			        	}
			        ],
			        itemGap: function(){
			        	if (window.screen.width <= 1366) {
			        		return 38;
			        	}else if (window.screen.width <= 1440) {
			        		return 47;
			        	}else if (window.screen.width <= 1680) {
			        		return 57;
			        	}
			        	else if (window.screen.width <= 1920) {
			        		return 60;
			        	}else{
			        		return 62;
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
				timeline: {
					left: '5%',
					bottom: '6%',
					axisType: 'category',
					autoPlay: false,
					playInterval: 1000,
					data: ['2010','2011','2012','2013','2014','2015'],
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
			    series : []
			},

			options: [
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [20, 60],
				            center : ['21%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [20, 60],
				            center : ['64%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [20, 63],
				            center : ['42%', '64%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				},
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [30, 70],
				            center : ['25%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [30, 70],
				            center : ['75%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [30, 75],
				            center : ['50%', '65%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				},
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [30, 70],
				            center : ['25%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [30, 70],
				            center : ['75%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [30, 75],
				            center : ['50%', '65%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				},
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [30, 70],
				            center : ['25%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [30, 70],
				            center : ['75%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [30, 75],
				            center : ['50%', '65%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				},
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [30, 70],
				            center : ['25%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [30, 70],
				            center : ['75%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [30, 75],
				            center : ['50%', '65%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				},
				{
					series : [
				        {
				            name:'COD',
				            type:'pie',
				            radius : [30, 70],
				            center : ['25%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'AN',
				            type:'pie',
				            radius : [30, 70],
				            center : ['75%', '30%'],
				            roseType : 'area',
				            data:[]
				        },
				        {
				            name:'总量',
				            type:'pie',
				            radius : [30, 75],
				            center : ['50%', '65%'],
				            roseType : 'area',
				            data:[]
				        }
				    ]
				}
			]
		};
		codanChart.setOption(option);

		var setData = function (){
			var data = function (thetime,thename){
				var resultData = [];
				for (var key in thedata[thename]) {
					if (key == thetime) {
						resultData.push({
							value:thedata[thename][thetime].工业源,
							name:'工业源',
							itemStyle: {
								normal: {
									color: '#275064'
								}
							}
						});
						resultData.push({
							value:thedata[thename][thetime].农业源,
							name:'农业源',
							itemStyle: {
								normal: {
									color: '#7DD4FF'
								}
							}
						});
						resultData.push({
							value:thedata[thename][thetime].生活源,
							name:'生活源',
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

			var dataTotal = function (thetime,thename){
				var resultData = [];
				for (var key in thedata[thename]) {
					if (key == thetime) {
						resultData.push({
							value:thedata[thename][thetime].工业废水排放总量,
							name:'工业排放',
							itemStyle: {
								normal: {
									color: '#275064'
								}
							}

						});
						resultData.push({
							value:thedata[thename][thetime].生活污水排放总量,
							name:'生活排放',
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

			codanChart.setOption({
				options: [
					{
						series: [
							{
								name: 'COD',
								data: data('2010','COD')
							},
							{
								name: 'AN',
								data: data('2010','AN')
							},
							{
								name: '总量',
								data: dataTotal('2010','effluentWater')
							}
						]
					},
					{
						series: [
							{
								name: 'COD',
								data: data('2011','COD')
							},
							{
								name: 'AN',
								data: data('2011','AN')
							},
							{
								name: '总量',
								data: dataTotal('2011','effluentWater')
							}
						]
					},
					{
						series: [
							{
								name: 'COD',
								data: data('2012','COD')
							},
							{
								name: 'AN',
								data: data('2012','AN')
							},
							{
								name: '总量',
								data: dataTotal('2012','effluentWater')
							}
						]
					},
					{
						series: [
							{
								name: 'COD',
								data: data('2013','COD')
							},
							{
								name: 'AN',
								data: data('2013','AN')
							},
							{
								name: '总量',
								data: dataTotal('2013','effluentWater')
							}
						]
					},
					{
						series: [
							{
								name: 'COD',
								data: data('2014','COD')
							},
							{
								name: 'AN',
								data: data('2014','AN')
							},
							{
								name: '总量',
								data: dataTotal('2014','effluentWater')
							}
						]
					},
					{
						series: [
							{
								name: 'COD',
								data: data('2015','COD')
							},
							{
								name: 'AN',
								data: data('2015','AN')
							},
							{
								name: '总量',
								data: dataTotal('2015','effluentWater')
							}
						]
					}
				]
			});
		}();
	}
};