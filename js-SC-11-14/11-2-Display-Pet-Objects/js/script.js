const statusButton = document.querySelector("button");
const pets = document.querySelector("ul.all-pets");
const li = document.createElement("li");

const createPet = function (name, species) {
    let pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },

        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play.`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        },
    }
        return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Clea", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;
let allPets = [sora, clover, baxter, cleo, francine]; // whole pet object each time
console.log(allPets);

const showPets = function(petArray)  {
    clearList();
    for (let pet of petArray) {
        let status = "ready to play";
        if (pet.isTired >= 7) {
            status = "sleeping";
        }
        let li = document.createElement("li");
        li.innerHTML =`<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
}

const clearList = function () {
    pets.innerText = '';
}
statusButton.addEventListener("click", function () {
    showPets(allPets);
})






