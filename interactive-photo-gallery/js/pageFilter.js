// JavaScript code
function search_pictures() {
	let input = document.getElementById('search').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('lightbox');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].outerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="inline-block";				
		}
	}
}