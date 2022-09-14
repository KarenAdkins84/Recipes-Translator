
function getAPIRecipe () {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '49bd2d9a87msh820cee85c9b73abp1a58c4jsnafb238f3371d',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};
	
	fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}

function getAPITranslate () {
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '1f4028efdbmshbe7a88de4a624b0p138246jsnde0a0e24dee3',
			'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
		},
		body: '{"text":"Language selection.","source":"en","target":"es"}'
	};
	
	fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))

};

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});




getAPIRecipe();
getAPITranslate();