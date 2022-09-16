inputValue = ""
let instructions = document.createElement('p');
const translated = document.querySelector('#translated')
const spanish = document.querySelector("#es");
const french = document.querySelector("#fr");
const turkish = document.querySelector("#tr");
const mandarin = document.querySelector("#zh");
const russian = document.querySelector("#ru");


spanish.addEventListener("click", function(){
	spanish.setAttribute("class","is-active");
	let language = "es"
})


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
		//console.log(directions)
		//getRecipe(directions)
		
		let buttonRecipe = resultsRecipe.data
		console.log(buttonRecipe)
		populateRecipeResults(buttonRecipe)

		})
		

}

function getAPITranslate(recipeInstructions,language ){
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'ad3138270amsh5aed76a88a48950p17791cjsn8aab4633eda6',
			'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
		},
		body: '{"text":"'+recipeInstructions+'","source":"en","target":"'+language+'"}'
	};
	
	fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
		.then(response => response.json())
		.then(response => {
			console.log(response);
            search.addEventListener
            let instructionsTrans = document.createElement('p');
            instructionsTrans.textContent = response.text;
            translated.appendChild(instructionsTrans);

		})
		.catch(err => console.error(err));

	
}


function getRecipe (recipeInstructions) {
	for(i=0; i<recipeInstructions.length; i++) {
	let instructions = document.createElement('p');
	instructions.textContent = recipeInstructions[i];
	console.log(recipeInstructions[i]);
	let notTranslated = document.querySelector('#notTranslated')
	notTranslated.appendChild(instructions);
	}

	}

const search= document.getElementById("search")
search.addEventListener("click", searchRecipe)
let searchInput= document.getElementById("searchInput")
let buttonBox=document.querySelector('#buttonBox');

let notTranslated = document.querySelector('#notTranslated')

function searchRecipe(){

	let inputValue= searchInput.value.trim()

	if(inputValue) {
	console.log(inputValue)
	getAPIRecipe(inputValue)
	notTranslated.innerHTML = ""
	buttonBox.innerHTML = ""
	} else{
		console.log('it works')
	}

}

function populateRecipeResults(buttonRecipe){
	
	for(i=1; i<6; i++){
		let recipeResults= document.createElement("button")
		recipeResults.setAttribute('id', 'recipeButton') 
		recipeResults.textContent= buttonRecipe[i].name;
		let buttonBox=document.querySelector('#buttonBox');
		buttonBox.appendChild(recipeResults);

		let recipeInstructions = buttonRecipe[i].instructions

		recipeResults.addEventListener( 'click', function (){
			instructions.textContent = ''
			getRecipe(recipeInstructions)
			getAPITranslate(recipeInstructions)
		})
		


	}
}

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});


//getAPIRecipe();
//getAPITranslate();
