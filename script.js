const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

const topimage = document.getElementById('ash');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const cardImage = document.querySelector('.card-img-top');
const nextBtn = document.querySelector('.btn-primary');
const firstStat = document.querySelector('.first-stat');
const secondStat = document.querySelector('.second-stat');
const thirdStat = document.querySelector('.third-stat');
const attackOne = document.querySelector('.attackOne');
const attackTwo = document.querySelector('.attackTwo');
const attackThree = document.querySelector('.attackThree');
const attackFour = document.querySelector('.attackFour');
const imageBack = document.querySelector('.behindView');


nextBtn.addEventListener('click', fetchPokemon);


function fetchPokemon() {
    fetch(baseURL+ pokemonNumber) 
    .then(res => res.json())
    .then(json => {
        let pokemonData = json;
        let pokemonImageURL = json.sprites.front_default;
        let pokemonName = json.species.name
        cardTitle.innerText = pokemonName;
        let pokemonType1 = json.types[0].type.name;
        firstStat.innerText = "Type: " + pokemonType1;
        let pokemonStat2 = json.weight;
        secondStat.innerText = "Weight: " + pokemonStat2 + "lbs";
        let pokemonStat3 = json.height;
        thirdStat.innerText = "Height: " + pokemonStat3;
        cardImage.src = pokemonImageURL;
        let firstAttack = json.moves[0].move.name;
        attackOne.innerText = firstAttack;
        let secondAttack = json.moves[1].move.name;
        attackTwo.innerText = secondAttack;
        let thirdAttack = json.moves[2].move.name;
        attackThree.innerText = thirdAttack;
        let fourthAttack = json.moves[3].move.name;
        attackFour.innerText = fourthAttack;
        let backImage = json.sprites.back_default;
        imageBack.src = backImage;
        console.log(json.sprites.front_default);
        console.log(json)

    })
    pokemonNumber ++
}

let pokemonNumber = 1;

