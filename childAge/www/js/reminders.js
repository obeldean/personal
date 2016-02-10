(function() {
	var images = [
		'noa_1.jpg',
		'noa_2.jpg',
		'noa_3.jpg'
	];
	var imgIndex = 0;
	changeImage();
	shufflePictures(images);
	showAge();

	function shufflePictures() {
		setInterval(changeImage, 30000);
	}

	function changeImage() {
		var imgEl = document.getElementsByClassName('round-picture')[0];
		if (imgIndex === images.length) {
			imgIndex = 0;
		}
		imgEl.src = 'img/' + images[imgIndex];
		imgIndex++;
	}

	function showAge() {
		var ageEl = document.getElementById('age');
		var textNode = document.createTextNode(getAge('2014-03-02'));
		ageEl.appendChild(textNode);
	}

	function getAge(dateString) {
		var birthDate = moment(dateString);
		var now = moment();

		var years = now.diff(birthDate, 'years');
		birthDate.add(years, 'years');

		var months = now.diff(birthDate, 'months');
		birthDate.add(months, 'months');

		var days = now.diff(birthDate, 'days');

		return years + 'years ' + months + 'months ' + days + 'days';
	}

})();