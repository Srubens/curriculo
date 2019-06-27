$(function(){

	if($(".jbtn").length){
		$(".jbtn:eq(0)").addClass("active");
		$(".jbtn").click(function(){
			let jtab = $(this);

			$(".jbtn").removeClass("active");
			jtab.addClass("active");

			$(".j_nav_item").fadeOut(function(){
				$(".j_nav_item").removeClass("j_active");
				$(".j_nav_item:eq("+ jtab.index() +")").fadeIn();
			});
		});
	}

});