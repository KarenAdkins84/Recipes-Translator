function getAPIRecipe (inputValue) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '49bd2d9a87msh820cee85c9b73abp1a58c4jsnafb238f3371d',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};
	
	fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=' + inputValue, options)
		.then(response => response.json())
		.then(response => {
			populateRecipeResults(response)
		})
		.catch(err => console.error(err));

}

function getAPITranslate(){
	const options = {
		method: 'POST',
		headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e20ceaa727msh1f834017aded922p19f4d1jsn26f28a840a3c',
		'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
		},
		body: '{"text":"Language selection.","source":"en","target":"es"}'
	};

	fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

function getRecipe () {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '58a7ac407amsh3758280bd01fa5ap112821jsn3df462a4e577',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};
	
	fetch('https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138', options)
		.then(recipe => recipe.json())
		.then(recipe => {
			for(i=0; i<recipe.instructions.length; i++) {
				let instructions = document.createElement('p');
				instructions.textContent = recipe.instructions[i].display_text;
				console.log(recipe.instructions[i]);
				let notTranslated = document.querySelector('#notTranslated')
				notTranslated.appendChild(instructions);
			}

		})
		.catch(err => console.error(err));
}

const search= document.getElementById("search")
search.addEventListener("click", searchRecipe)
let searchInput= document.getElementById("searchInput")

function searchRecipe(){
	let inputValue= searchInput.value.trim()
	console.log(searchInput)
	getAPIRecipe(inputValue)

}

function populateRecipeResults(response){
	
	for(i=1; i<response.results.length; i++){
		let recipeResults= document.createElement("button")
		recipeResults.textContent= recipe.results[i].search_value;
		let buttonBox=document.querySelector('#buttonBox');
		buttonBox.appendChild(recipeResults);


	}
}



//getAPIRecipe();
getAPITranslate();
getRecipe();