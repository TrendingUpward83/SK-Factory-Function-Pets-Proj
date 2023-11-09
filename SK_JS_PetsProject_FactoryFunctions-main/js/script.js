const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function(name, species){
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep : function(){
            console.log(`${this.name} needs a nap ...zzz...`);
            this.isTired = 1; 
        },
        play : function(){
            if(this.isTired ===10){
                console.log(`Too tired to play`);
                this.sleep(); 
            }
            else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired +=1;
            }
        }

    };
    return pet; 
};

//create the pets
const sora = createPet("Sora", "ferret"); 
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "dog"); 
const cleo = createPet("Cleo", "cat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine); 

clover.isTired = 8;
francine.isTired = 9; 

//create array of pets
const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

const showPets = function(petsArray){
    pets.innerHTML= ""; //clear the list when pressed
    for (let pet of petsArray){
        let status = "ready to play"; 
        console.log(pet); 
        if(pet.isTired <=7){
            status = "sleeping"; 
        }
        const listElm = document.createElement("li");
        listElm.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`
        pets.append(listElm); 
    }
}

statusButton.addEventListener("click", function (){
    showPets(allPets); 
});