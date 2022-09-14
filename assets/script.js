function getAPIRecipe (inputValue) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1f4028efdbmshbe7a88de4a624b0p138246jsnde0a0e24dee3',
			'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
		}
	};
	
	fetch('https://recipesapi2.p.rapidapi.com/recipes/'+ inputValue +'?maxRecipes=2', options)
		.then(resultsRecipe => resultsRecipe.json())
		.then(resultsRecipe => { 
			console.log(resultsRecipe)
		let directions = resultsRecipe.data[0].instructions
		console.log(directions)
		getRecipe(directions)
		
		let buttonRecipe = resultsRecipe.data
		populateRecipeResults(buttonRecipe)

		})
		

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

function getRecipe (directions) {
	for(i=0; i<directions.length; i++) {
	let instructions = document.createElement('p');
	instructions.textContent = directions[i];
	console.log(directions[i]);
	let notTranslated = document.querySelector('#notTranslated')
	notTranslated.appendChild(instructions);
	}

	}

const search= document.getElementById("search")
search.addEventListener("click", searchRecipe)
let searchInput= document.getElementById("searchInput")

function searchRecipe(){

	let inputValue= searchInput.value
	console.log(inputValue)
	getAPIRecipe(inputValue)

}

function populateRecipeResults(buttonRecipe){
	
	for(i=1; i<6; i++){
		let recipeResults= document.createElement("button")
		recipeResults.textContent= buttonRecipe[i].name;
		let buttonBox=document.querySelector('#buttonBox');
		buttonBox.appendChild(recipeResults);
		


	}
}


getAPIRecipe();
getAPITranslate();