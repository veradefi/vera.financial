!function (e) { var t = function () { var e = this; this.defaults = { wrapperId: "ms",wrapperDamper: .07,cancelOnTouch: !1 },this.validateOptions = function (t) { for (var i in t) e.defaults.hasOwnProperty(i) && Object.defineProperty(e.defaults,i,{ value: Object.getOwnPropertyDescriptor(t,i).value }) },this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset = 0,this.animateId,this.resizing = !1,this.active = !1,this.wrapperHeight,this.bodyHeight }; t.prototype = { init: function (e) { e && this.validateOptions(e),this.active = !0,this.resizing = !1,this.wrapperDamper = this.defaults.wrapperDamper,this.wrapperId = this.defaults.wrapperId,this.cancelOnTouch = this.defaults.cancelOnTouch,this.wrapper = document.getElementById(this.wrapperId),this.wrapper.style.position = "fixed",this.wrapper.style.width = "100%",this.wrapperHeight = this.wrapper.clientHeight,document.body.style.height = this.wrapperHeight + "px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch && window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset = 0,this.animateId = window.requestAnimationFrame(this.animate.bind(this)) },wrapperUpdate: function () { var e = null != document.scrollingElement ? document.scrollingElement.scrollTop : document.documentElement.scrollTop || 0; this.wrapperOffset += (e - this.wrapperOffset) * this.wrapperDamper,this.wrapper.style.transform = "translate3d(0," + -this.wrapperOffset.toFixed(2) + "px, 0)" },checkResize: function () { this.wrapperHeight != this.wrapper.clientHeight && this.resize() },resize: function () { var e = this; e.resizing || (e.resizing = !0,window.cancelAnimationFrame(e.animateId),window.setTimeout(function () { e.wrapperHeight = e.wrapper.clientHeight,parseInt(document.body.style.height) != parseInt(e.wrapperHeight) && (document.body.style.height = e.wrapperHeight + "px"),e.animateId = window.requestAnimationFrame(e.animate.bind(e)),e.resizing = !1 },150)) },animate: function () { this.checkResize(),this.wrapperUpdate(),this.animateId = window.requestAnimationFrame(this.animate.bind(this)) },cancel: function () { this.active && (window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active = !1,this.wrapper = "",this.wrapperOffset = 0,this.resizing = !0,this.animateId = "") } },e.ms = new t }(this);

window.onload = function () {

	let d = document,
		mobileBtn = d.getElementById('menu'),
		body = d.querySelectorAll('.header, body'),
		links = d.querySelectorAll(".scroller"),
		svgMainlist = d.querySelectorAll(".mainlist span"),
		rotator = d.getElementById("rotator"),
		lend = d.querySelector(".lend"),
		stake = d.querySelector(".stake"),
		padlock = d.querySelector(".padlock"),
		double = d.querySelector(".double"),
		submitForm = d.getElementById('mc-embedded-subscribe'),
		closeBtn = d.getElementById('closebtn'),
		v = 'visible';



	// function isView(el) {
	//     const rect = el.getBoundingClientRect();
	//     return (
	//         rect.top >= 0 &&
	//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
	// }


	// function ar(el) {
	// 	isView(el) ? el.classList.add(v) : '' ;
	// }


	// function visibleSvg(){
	// 	ar(lend);
	// 	ar(stake);
	// 	ar(padlock);
	// 	ar(double);
	// }




	mobileBtn.onclick = function (e) {
		event.preventDefault();
		for (let x of body) {
			x.classList.toggle('visible');
		}
	}

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(e) {
		e.preventDefault();
		for (let x of body) {
			x.classList.toggle('visible');
		}
		const href = this.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth"
		});
	}

	window.addEventListener("scroll",function (event) {
		var top = this.scrollY;

		if (top > 150 && top <= 800) {
			for (let span of svgMainlist) {
				span.style.width = top + 'px';
			}
		}

		// visibleSvg();

	},{ passive: true });


	window.interVal = 1;

	// function changeClass(){		
	// 	window.interVal++;

	// 	if(window.interVal == 1){
	// 		rotator.className = rotator.className.replace(/\bborrowing\b/g, "staking");
	// 	}
	// 	if(window.interVal == 2){
	// 		rotator.className = rotator.className.replace(/\bstaking\b/g, "lending");
	// 	}
	// 	if(window.interVal == 3){
	// 		rotator.className = rotator.className.replace(/\blending\b/g, "borrowing");
	// 		window.interVal = 0;
	// 	}

	// }

	function ve(emails) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(emails).toLowerCase());
	}

	closeBtn.onclick = function () {
		this.parentElement.style.display = 'none';
		this.parentElement.parentElement.classList.add('no-alert');
	}

	// submitForm.onclick = function (e) {
	// 	e.preventDefault();
	// 	ve(d.getElementById("mce-EMAIL").value) ? d.querySelector('.suscribe').submit() : d.getElementById("mce-EMAIL").classList.add('error');
	// }


	// rotator.classList.add('staking');
	// setInterval(changeClass, 2999);

}
