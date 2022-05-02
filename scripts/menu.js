let menuButton = document.getElementById("nav-menu");
let menuList = document.getElementById("menu-list");

menuButton.addEventListener('click', ()=>{
		let height = 0;
		let minHeight = menuList.scrollHeight;
		if (menuList.clientHeight == "0"){
			height = minHeight;
		} 
		else {
			height = 0;
		};
		menuList.style.height  = height + "px";
	});