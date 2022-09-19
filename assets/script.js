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
            'X-RapidAPI-Key': 'bcc66970f7mshce5cc06abea6b04p1c28d4jsn4fb037a20543',
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
        const currentRecipe = buttonRecipe[i];
        let recipeResults= document.createElement("button")
        recipeResults.setAttribute('id', 'recipeButton'+ [i]) 
        recipeResults.setAttribute('class', 'button')
        recipeResults.setAttribute('data-ingredients', JSON.stringify(currentRecipe.ingredients))
        recipeResults.setAttribute('data-instructions', JSON.stringify(currentRecipe.instructions))
        recipeResults.textContent= buttonRecipe[i].name;
        buttonBox.appendChild(recipeResults);

        recipeResults.addEventListener("click", function() {
            notTranslated.innerHTML = '<div class="loader"></div>'
            translated.innerHTML = '<div class="loader"></div>'
            const ingredients = JSON.parse(this.getAttribute('data-ingredients'));
            const instructions = JSON.parse(this.getAttribute('data-instructions'));
            displayUntranslated(ingredients, instructions)
        })
    }
    
}

function displayUntranslated(instructions, ingredients) {

    notTranslated.innerHTML = "";

    for(i=0; i < instructions.length; i++) {
        let instruction = document.createElement('p');
        instruction.textContent = instructions[i];
        console.log(instructions[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(instruction);

        displayTranslated(instructions[i]);
    }

    for(i=0; i < ingredients.length; i++) {
        let line = document.createElement('hr');
        let ingredient = document.createElement('p');
        ingredient.textContent = ingredients[i];
        console.log(ingredients[i]);
        let notTranslated = document.querySelector('#notTranslated')
        notTranslated.appendChild(line);
        notTranslated.appendChild(ingredient);

        displayTranslated(ingredient[i]);
    }
}


function displayTranslated(currentInstruction) {

    translated.innerHTML = "";

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'ad3138270amsh5aed76a88a48950p17791cjsn8aab4633eda6',
                'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
            },
            body: '{"text":"'+currentInstruction+'","source":"en","target":"es"}'
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