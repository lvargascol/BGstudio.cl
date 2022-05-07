//MENU DESPLEGABLE

let menuButton = document.getElementById("nav-menu");
let menuList = document.getElementById("menu-list");
let menuIcon = document.getElementById("menu-icon");
let cancelIcon = document.getElementById("cancel-icon");

menuButton.addEventListener('click', ()=>{
		let height = 0;
		let minHeight = menuList.scrollHeight;
		if (menuList.clientHeight == "0"){
			height = minHeight;			
			changeMenuIcon(menuIcon,false,0.3,-180);
			setTimeout(function() {
				menuIcon.style.height = "0";
				cancelIcon.style.height = "auto";
				changeMenuIcon(cancelIcon,true,0.3,-180);
			},300);
		} 
		else {
			height = 0;
			changeMenuIcon(cancelIcon,false,0.3,0);
			setTimeout(function() {
				cancelIcon.style.height = "0";
				menuIcon.style.height = "auto";
				changeMenuIcon(menuIcon,true,0.3,0);
			},300);
			// changeMenuIcon(cancelIcon,false,0.3,0);
		};
		menuList.style.height  = height + "px";
		
	});

	function changeMenuIcon(icon, show, time, angle) {
		if (show)
		{
			icon.style.transform = 'rotate(' + angle + 'deg) scale(1)';
			icon.style.transition = 'all ' + time + "s";
		} else 
		{
			icon.style.transform = 'rotate(' + angle + 'deg) scale(0.2)';
			icon.style.transition = 'all ' + time + "s";
		}
	};