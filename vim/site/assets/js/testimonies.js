(function() {
	var id_active = 1;
	var testimonies_count = 3;

	var change_testimony = function(new_id) {
		document.querySelector('#figure-'+id_active+'-testimonies').classList.remove('active');
		document.querySelector('#button-'+id_active+'-testimonies').classList.remove('active');
		document.querySelector('#figure-'+new_id+'-testimonies').classList.add('active');
		document.querySelector('#button-'+new_id+'-testimonies').classList.add('active');
		id_active = new_id;
	};

	document.querySelector('.left').addEventListener('click', function() {
		change_testimony(id_active - 1 + testimonies_count * (id_active == 1));
	});

	document.querySelector('.right').addEventListener('click', function() {
		change_testimony(id_active + 1 - testimonies_count * (id_active == testimonies_count));
	});

	for (var i = 1; i <= testimonies_count; i++) {
		(function(id) {
			document.querySelector('#button-'+id+'-testimonies').addEventListener('click', function() {
				change_testimony(id);
			});
		})(i);
	}

})();
