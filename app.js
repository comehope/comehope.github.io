var data = [
	'animation-advanced-animation-path',
	'animation-css-3d-solar-system',
	'animation-enchanted-forest',
	'animation-fleeing-ghosts',
	'animation-hail-the-old-masters',
	'animation-lucy-lou-and-her-ukulele',
	'animation-microcosm',
	'animation-moving-car',
	'animation-particles-in-space',
	'animation-plinko-with-matterjs',
	'animation-rainy-season',
	'animation-rube-goldbergs-monster',
	'animation-square-dr-loader',
	'game-chat-noir-haxagon-version',
	'game-color-match',
	'game-get-to-zero',
	'game-javascript',
	'interaction-sequencejs-mono',
	'interaction-tile-reveal',
	'interaction-venetian-blinds',
	'visualization-analog-binary-clock',
	'visualization-circular-calendar-display',
	'visualization-hd-clock'
];

$(document).ready(function() {
	$('.gallery').append('<ul id="gallery"></ul>');
	
	data.forEach(function(x) {
		$('nav ul').append(`<li id="${x}"></li>`);
	});

	$('.gallery li').each(function() {
		$(this).css('background-image', `url(images/${$(this).attr('id')}.png)`);
	});

	$('.gallery li').click(function() {
		$('.live').attr('src', `http://www.zhang-ou.com/exercises/excellent/${$(this).attr('id')}/index.html`);
	});

	$(`.gallery li:nth-child(${Math.floor(Math.random() * data.length + 1)})`).click();	
});
