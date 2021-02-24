window.onload = function() {
console.log('Страница загружена');


// //////////////////////////////////////////// 
//
//			HEADER
//
// ///////////////////////////////////////////

var allPage = document.querySelector('.allPage');
var humburger = document.querySelectorAll('.header__humburger');

var headerNave = document.querySelector('.header__nav');

for (var i = 0; i < humburger.length; i++) {
	humburger[i].addEventListener('click', function() {
		this.classList.toggle('active');
		// при активном классе active отключаем прокуртку страницы  
		document.querySelector('body').classList.toggle('noscroll');
		headerNave.classList.toggle('active');
		allPage.classList.toggle('active');
	});
}

var move = document.querySelector('.move');
window.addEventListener('scroll', function() {
	if (this.scrollY > 120) {
		move.classList.add('scrol');
	} else {
		move.classList.remove('scrol');
	}
});

// //////////////////////////////////////////// 
//
//			SECTION 
//
// ///////////////////////////////////////////

var frash = document.querySelectorAll('.frash');
for (var i = 0; i < frash.length; i++) {
	frash[i].classList.add('active');
}

function sectionMove(elem, number) {
	var timer = setInterval(function() {
	var resilt = elem.getBoundingClientRect().top - document.documentElement.clientHeight;
	if(resilt < -number) {
		console.log(23);
		clearTimeout(timer);
		elem.classList.remove('active');
	}
	}, 50);
}

// //////////////////////////////////////////// 
//
//			SECTION 
//
// ///////////////////////////////////////////
var sectionsAll = document.querySelectorAll('.section.frash');

for (var i = 0; i < sectionsAll.length; i++) {
	sectionMove(sectionsAll[i], -100);
}


}  //  END  window.onload