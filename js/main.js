class Pet {
    constructor(petName, petSize, petWeight, petAge, petDangerousToHumans, petDangerousToPets, petSicked, petInSpecialTreatment){
    this.petName = petName.slice(0,1).toUpperCase() + petName.slice(1).toLowerCase();
    this.petSize = petSize.toLowerCase();
    this.petWeight = petWeight.toLowerCase();
    this.petAge = petAge;
    this.petDangerousToHumans = petDangerousToHumans.toLowerCase();
    this.petDangerousToPets = petDangerousToPets.toLowerCase();
    this.petSicked = petSicked.toLowerCase();
    this.petInSpecialTreatment = petInSpecialTreatment.toLowerCase();
    }
    petRoom = 0;
}

class PetsRoom {
    constructor(petsCapacity,roomNumber){
        this.petsCapacity = petsCapacity;
        this.roomNumber = roomNumber;
        this.pets = [];
        this.petsInside = this.pets.length;
    }
    addPet(pet){
        if (this.petsInside < this. petsCapacity){
            this.pets.push(pet.petName);
            this.petsInside += 1;
            pet.petRoom = this.roomNumber;
            return `Se a agregado a ${pet.petName} a la habitación ${this.roomNumber}.`
        } else {
            return `No se pueden agregar más mascotas en la habitación ${this.roomNumber}` 
        }
    }
    removePet(pet){
        if (this.pets.indexOf(pet.petName) > -1){
            this.pets.splice(this.pets.indexOf(pet.petName),1);
            pet.petRoom = 0;
            return `Se a removido a ${pet.petName} de la habitación ${this.roomNumber}`
        } else {
            return `${pet.petName} no se encuentra en la habitación ${this.roomNumber}`
        }
    }
}

let dogsRooms = [new PetsRoom(3,1), new PetsRoom(3,2), new PetsRoom(2,3), new PetsRoom(5,4), new PetsRoom(3,5), new PetsRoom(2,6), new PetsRoom(2,7), new PetsRoom(1,8), new PetsRoom(1,9), new PetsRoom(1,10),]

let dogsInShelter = [new Pet('lola', 'pequeño', 'sobrepeso', 2, 'no', 'no', 'si', 'no'), new Pet('paco', 'grande', 'desnutrido', 5, 'no', 'no', 'no', 'si'), new Pet('simon', 'gigante', 'ideal', 2, 'si', 'no', 'no', 'no'), new Pet('pico', 'mini', 'delgado', 2, 'no', 'no', 'no', 'si'), new Pet('tomas', 'mediano', 'obeso', 2, 'no', 'si', 'no', 'no'), new Pet('lucas', 'grande', 'ideal', 2, 'no', 'no', 'no', 'no'), new Pet('sofia', 'pequeño', 'delgado', 2, 'no', 'no', 'si', 'no')]

dogsRooms[0].addPet(dogsInShelter[0]);
dogsRooms[2].addPet(dogsInShelter[1]);
dogsRooms[2].addPet(dogsInShelter[2]);
dogsRooms[3].addPet(dogsInShelter[3]);
dogsRooms[3].addPet(dogsInShelter[4]);

let listDogs = document.querySelector('.lists__pets');

for (let i = 0; i < dogsInShelter.length; ++i){    
    listDogs.appendChild(createDogsList(i,'li'));
}

function createDogsList(i,container){
    let dog = document.createElement(container);
    dog.innerText = dogsInShelter[i].petName;
    return dog
}