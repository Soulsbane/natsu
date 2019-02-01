const NUMBER_OF_FIREFLIES = 25;
const $CONTAINER = $(".container");
const $CONTAINER_WIDTH = $CONTAINER.width();
const $CONTAINER_HEIGHT = $CONTAINER.height();

for(var i = 0; i < NUMBER_OF_FIREFLIES; i++) {
	var firefly = $('<div class="firefly"></div>');

	TweenLite.set(firefly, {
		x: Math.random() * $CONTAINER_WIDTH,
		y: Math.random() * $CONTAINER_HEIGHT
	});

	$CONTAINER.append(firefly);
	flyTheFirefly(firefly);
}

function flyTheFirefly(firefly) {
	var flyTl = new TimelineMax();
	var fadeTl = new TimelineMax({
		delay: Math.floor(Math.random() * 2) + 1,
		repeatDelay: Math.floor(Math.random() * 6) + 1,
		repeat: -1
	});

	fadeTl.to(
		[firefly],
		0.25,
		{ opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
		Math.floor(Math.random() * 6) + 1
	);

	flyTl.set(firefly, {scale: Math.random() * 0.75 + 0.5})
		.to(firefly, Math.random() * 100 + 100, {
			bezier: {
				values: [
					{
						x: Math.random() * $CONTAINER_WIDTH,
						y: Math.random() * $CONTAINER_HEIGHT
					},
					{
						x: Math.random() * $CONTAINER_WIDTH,
						y: Math.random() * $CONTAINER_HEIGHT
					}
				]
			},

			onComplete: flyTheFirefly,
			onCompleteParams: [firefly]
		});
}
