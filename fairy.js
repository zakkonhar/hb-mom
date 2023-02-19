'use strict';

(function(){
	const layout = document.querySelector('#layout');
	const fairy = document.querySelector('#fairy');
	
	if (!layout || !fairy) return;
	
	let coordsMouse = {
		left: 0,
		top: 0
	}
	
	function moveCatbug(event) {	

		coordsMouse = {
			left: event.pageX,
			top: event.pageY
		}

		fairy.style.left = `${coordsMouse.left}px`;
		fairy.style.top = `${coordsMouse.top}px`;
	}

	function moveToStartPosCatbug(event) {
		fairy.style.left = `50%`;
		fairy.style.top = `50%`;
	}
	
	layout.addEventListener('mousemove', moveCatbug);
	layout.addEventListener('mouseout', moveToStartPosCatbug);
})();
