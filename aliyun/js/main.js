$(function (){
	
	$('#fullpage').fullpage({
		// sectionsColor:['#777','#777','#777','#777','#777'], //控制每个section的背景颜色
		
		verticalCentered:false,  //内容是否垂直居中(默认为true)
		 
		css3:true, //是否使用 CSS3 transforms 滚动(默认为false)
		
		scrolllingSpeed:1000,  //滚动速度，单位为毫秒(默认为700)
		
		anchors:['page1','page2','page3','page4','page5'],  //定义锚链接(值不能和页面中任意的id或name相同，尤其是在ie下，定义时不需要加#) 
		
		autoScrolling:true, // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
		
		// fixedElements:"#logo", //固定元素(将logo固定在每一个section页面)
		
		menu:"#menu",	//固定菜单导航栏(将导航栏固定在每一个section页面)
		
		keyboardScrolling:true, //是否使用键盘方向键导航(默认为true)
		
		navigation:true, //是否显示项目导航（默认为false）
		
		slidesNavigation:true,	//是否显示左右滑块的项目导航
		
		controlArrows:false,   //是否隐藏左右滑块的箭头(默认为true)

		afterLoad: function (anchorLink,index){
			var unactivebg = ["page1bg00","page2bg00","page3bg00","page4bg00","page5bg00"];
			var activebg = ["page1bg","page2bg","page3bg","page4bg","page5bg"];
			var theindex = index-1;
			var theid = '#'+anchorLink+'bg';
			for (var i = 0; i < unactivebg.length; i++) {
				$('#pagemenu a').eq(i).css({"background-image":'url(./images/'+unactivebg[i]+'.png)'});
			};
			$(theid).css({"background-image":'url(./images/'+activebg[theindex]+'.png)'});
		},
	});
	function menuhover(){
		var unactivebg = ["page1bg00","page2bg00","page3bg00","page4bg00","page5bg00"];
		var activebg = ["page1bg","page2bg","page3bg","page4bg","page5bg"];
		$('#pagemenu a').each(function (index){
			$(this).hover(
				function (){
					$(this).css({"background-image":'url(./images/'+activebg[index]+'.png)'});
				},
				function (){
					if ($(this).parent().hasClass("active")) {
						$(this).css({"background-image":'url(./images/'+activebg[index]+'.png)'});
					}else {
						$(this).css({"background-image":'url(./images/'+unactivebg[index]+'.png)'});
					}
				}
			);
		});
	};
	menuhover();
	
	function theSize(){
		var ml = -$('.contentbox').width()/2;
		var mh = -($('.contentbox').height()-$('#menu').height())/2;
		$('.contentbox').css({"margin-left": ml+'px',"margin-top": mh+'px'});
		$('#pagemenu a').css({"line-height":$('#pagemenu a').height()+'px'});
	};
	theSize();

	page1.getData();
	page2.getData();
	page3.getData();
	page4.getData();
	page5.getData();
})