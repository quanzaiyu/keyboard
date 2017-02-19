$(document).ready(function(){
	// 输入缓存
	var str = "";
	// input的焦点事件
	$(".input").focus(function(){
		this.placeholder = "";
	});
	$(".input").blur(function(){
		this.placeholder = "请在此输入......";
	});
	// input监听按键按下与抬起
	$(".input").keydown(function(e){
		// 获取按键码
		$(".box").html("keyCode : "+e.keyCode);
		// enter键
		if (e.keyCode == 13) {	
			$(".text").html($(this).val());
			$(this).val("");
		}
		var code = $(".code");
		for (var i=0;i<code.length;i++) {
			if(code[i].id.substring(1) == e.keyCode){
				// 添加样式
				$(".code").eq(i).addClass("keydown");
			}
		}
	});
	$(".input").keyup(function(e){
		$("li,dd").removeClass("keydown");
	});
	$(".input").change(function(){
		str = $(".input").val();
//		console.log(str);
	});
	// 获取按键监听
	$(".code").click(function(){
		$(".box").html("keyCode : "+this.id.substring(1));
	});
	$(".char").click(function(){
		$(".input").val($(".input").val()+$(this).html());
		str = $(".input").val();
//		console.log(str);
	});
	// 功能按键
	$(".funBack").click(function(){//Backspace键
		$(".input").val(str.substring(0,str.length-1));
		str = $(".input").val();
	});
	$(".funEnter").click(function(){//Enter键
		$(".text").html($("input").val());
		$("input").val("");
	});
});
