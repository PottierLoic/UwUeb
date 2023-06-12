let trail_cursor = document.querySelector("#trail-cursor");
let circles = trail_cursor.getAttribute("data-circle");
let coords = {
	x: 0,
	y: 0
};

for (i = 0; i < circles; i++) {
	let div = document.createElement("div");
	div.className = "cursor-circle";
	trail_cursor.appendChild(div);
}

let all_circles = document.querySelectorAll(".cursor-circle");
all_circles.forEach((el) => {
	el.x = 0;
	el.y = 0;
});

window.addEventListener("mousemove", function (e) {
	coords.x = e.clientX;
	coords.y = e.clientY;
});

function anim_circle() {
	let x = coords.x;
	let y = coords.y;

	all_circles.forEach((el, index) => {
		el.style.left = x - el.clientHeight / 2 + "px";
		el.style.top = y - el.clientHeight / 2 + "px";

		el.style.scale = (all_circles.length - index) / all_circles.length;

		el.x = x;
		el.y = y;

		let next_circle = all_circles[index + 1] || all_circles[0];
		x += (next_circle.x - x) * 0.3;
		y += (next_circle.y - y) * 0.3;
	});

	requestAnimationFrame(anim_circle);
}

anim_circle();
