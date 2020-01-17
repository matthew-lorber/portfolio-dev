function update(e){
	const about = document.getElementById("lightsOut");
	const x = e.clientX || e.touches[0].clientX;
	const y = e.clientY || e.touches[0].clientY;
	about.style.setProperty('--cursorX', x + 'px');
	about.style.setProperty('--cursorY', y + 'px');
}

about.addEventListener('mousemove', update);
about.addEventListener('touchmove', update);