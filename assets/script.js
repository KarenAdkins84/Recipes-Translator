
const search= document.getElementById("search")
const searchInput= document.getElementById("searchInput")
const buttonBox=document.querySelector('#buttonBox');
const notTranslated = document.querySelector('#notTranslated')




search.addEventListener("click", searchRecipe)

function searchRecipe(){

    let inputValue= searchInput.value.trim()
    localStorage.setItem(inputValue, inputValue);


    if(inputValue) {
    console.log(inputValue)
    getAPIRecipe(inputValue)
    notTranslated.innerHTML = ""
    buttonBox.innerHTML = ""
	notTranslated.innerHTML = '<div class="loader"></div>'
    } else{
        console.log('it works')
    }
};

function getAPIRecipe (inputValue) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f4028efdbmshbe7a88de4a624b0p138246jsnde0a0e24dee3',
            'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
        }
    };
    
    fetch('https://recipesapi2.p.rapidapi.com/recipes/'+ inputValue +'?maxRecipes=5', options)
        .then(resultsRecipe => resultsRecipe.json())
        .then(resultsRecipe => { 
            console.log(resultsRecipe)
			notTranslated.innerHTML = "";
			let buttonRecipe = resultsRecipe.data
			console.log(buttonRecipe)
			populateRecipeResults(buttonRecipe)

        })
        

};

function populateRecipeResults(buttonRecipe){
    for(i=0; i<buttonRecipe.length; i++){
        let recipeResults= document.createElement("button")
        recipeResults.setAttribute('id', 'recipeButton'+ [i]) 
		recipeResults.setAttribute('class', 'button')
        recipeResults.textContent= buttonRecipe[i].name;
        buttonBox.appendChild(recipeResults);
    }

        
    let recipeButton0 = document.getElementById('recipeButton0')

	if(recipeButton0){
    let recipeInstructions0 = buttonRecipe[0].instructions
    recipeButton0.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        displayUntranslated0(recipeInstructions0)
        displayTranslated0(recipeInstructions0)
    })}


    let recipeButton1 = document.getElementById('recipeButton1')
	if(recipeButton1){
    let recipeInstructions1 = buttonRecipe[1].instructions
    recipeButton1.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        displayUntranslated1(recipeInstructions1)
        displayTranslated1(recipeInstructions1)
    })}

    let recipeButton2 = document.getElementById('recipeButton2')
	if(recipeButton2){
    let recipeInstructions2 = buttonRecipe[2].instructions
    recipeButton2.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        displayUntranslated2(recipeInstructions2)
        displayTranslated2(recipeInstructions2)
    })}

    let recipeButton3 = document.getElementById('recipeButton3')
	if(recipeButton3){
    let recipeInstructions3 = buttonRecipe[3].instructions
    recipeButton3.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        displayUntranslated3(recipeInstructions3)
        displayTranslated3(recipeInstructions3)
    })}

    let recipeButton4 = document.getElementById('recipeButton4')
	if(recipeButton4){
    let recipeInstructions4 = buttonRecipe[4].instructions
    recipeButton4.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        if(recipeInstructions4){
        displayUntranslated4(recipeInstructions4)
        displayTranslated4(recipeInstructions4)
        }
    })}

    let recipeButton5 = document.getElementById('recipeButton5')
	if(recipeButton5){
    let recipeInstructions5 = buttonRecipe[5].instructions
    recipeButton5.addEventListener('click', function() {
		notTranslated.innerHTML = '<div class="loader"></div>'
		translated.innerHTML = '<div class="loader"></div>'
        displayUntranslated5(recipeInstructions5)
        displayTranslated5(recipeInstructions5)
    })}

    
}

function displayUntranslated0(recipeInstructions0) {

	notTranslated.innerHTML = "";

    for(i=0; i<recipeInstructions0.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions0[i];
        console.log(recipeInstructions0[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated0(recipeInstructions0) {

	translated.innerHTML = "";

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions0+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

function displayUntranslated1(recipeInstructions1) {

	notTranslated.innerHTML = "";

    for(i=0; i<recipeInstructions1.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions1[i];
        console.log(recipeInstructions1[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated1(recipeInstructions1) {

	translated.innerHTML = "";

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions1+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

function displayUntranslated2(recipeInstructions2) {

	notTranslated.innerHTML = "";

    for(i=0; i<recipeInstructions2.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions2[i];
        console.log(recipeInstructions2[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated2(recipeInstructions2) {

	translated.innerHTML = "";

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions2+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

function displayUntranslated3(recipeInstructions3) {

	notTranslated.innerHTML = "";

    for(i=0; i<recipeInstructions3.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions3[i];
        console.log(recipeInstructions3[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated3(recipeInstructions3) {

	translated.innerHTML = "";


        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions3+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

function displayUntranslated4(recipeInstructions4) {
	
	notTranslated.innerHTML =""
    
	for(i=0; i<recipeInstructions4.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions4[i];
        console.log(recipeInstructions4[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated4(recipeInstructions4) {
	
	translated.innerHTML = ""

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions4+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

function displayUntranslated5(recipeInstructions5) {

	notTranslated.innerHTML = '';

    for(i=0; i<recipeInstructions5.length; i++) {
        let instructions = document.createElement('p');
        instructions.textContent = recipeInstructions5[i];
        console.log(recipeInstructions5[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instructions);
        }
}

function displayTranslated5(recipeInstructions5) {

	translated.innerHTML = '';

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd42ea5f80msh5ad9060337afeafp1218d9jsncd6f921b31a4',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+recipeInstructions5+'","source":"en","target":"es"}'
        };
        
        fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let instructionsTrans = document.createElement('p');
                instructionsTrans.textContent = response.text;
                translated.appendChild(instructionsTrans);
            })
            .catch(err => console.error(err));
    
}

