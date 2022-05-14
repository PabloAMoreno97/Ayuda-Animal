class Pet {
    constructor(petName, petSize, petWeight, petAge, petDangerousToHumans, petDangerousToPets, petSick, petInSpecialTreatment){
    this.petName = petName.slice(0,1).toUpperCase() + petName.slice(1).toLowerCase();
    this.petSize = petSize.toLowerCase();
    this.petWeight = petWeight.toLowerCase();
    this.petAge = petAge;
    this.petDangerousToHumans = petDangerousToHumans.toLowerCase();
    this.petDangerousToPets = petDangerousToPets.toLowerCase();
    this.petSick = petSick.toLowerCase();
    this.petInSpecialTreatment = petInSpecialTreatment.toLowerCase();
    }
}

class PetsRoom {
    constructor(petsCapacity){
        this.petsCapacity = petsCapacity;
        this.pets = [];
        this.petsInside = this.pets.length;
    }
    addPet(pet){
        if (this.petsInside < this. petsCapacity){
            this.pets.push(pet.petName)
            this.petsInside += 1;
            return `Se a agregado a ${pet.petName} a la habitación.`
        } else {
            return 'No se pueden agregar más mascotas en esta habitación' 
        }
    }
    removePet(pet){
        if (this.pets.indexOf(pet.petName) > -1){
            this.pets.splice(this.pets.indexOf(pet.petName),1)
            return `Se a removido a ${pet.petName} de la celda`
        } else {
            return `El perro ${pet.petName} no se encuentra en la celda`
        }
    }
}

const room1 = new PetsRoom(3);
const room2 = new PetsRoom(3);
const room3 = new PetsRoom(2);
const room4 = new PetsRoom(5);
const room5 = new PetsRoom(3);
const room6 = new PetsRoom(2);
const room7 = new PetsRoom(2);
const room8 = new PetsRoom(1);
const room9 = new PetsRoom(1);
const room10 = new PetsRoom(1);

const lola = new Pet('lola', 'pequeño', 'sobrepeso', 2, 'no', 'no', 'si', 'no');
const paco = new Pet('paco', 'grande', 'extremadamente delgado', 5, 'no', 'no', 'no', 'si');
const simon = new Pet('simon', 'gigante', 'ideal', 2, 'si', 'no', 'no', 'no');
const pico = new Pet('pico', 'mini', 'delgado', 2, 'no', 'no', 'no', 'si');
const tomas = new Pet('tomas', 'mediano', 'extremadamente obeso', 2, 'no', 'si', 'no', 'no');
const lucas = new Pet('lucas', 'grande', 'ideal', 2, 'no', 'no', 'no', 'no');
const sofia = new Pet('sofia', 'pequeño', 'delgado', 2, 'no', 'no', 'si', 'no');