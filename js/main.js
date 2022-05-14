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
    this.petRoom = "Sin asignar";
    }
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
            return 'No se pueden agregar más mascotas en esta habitación' 
        }
    }
    removePet(pet){
        if (this.pets.indexOf(pet.petName) > -1){
            this.pets.splice(this.pets.indexOf(pet.petName),1)
            pet.peetRoom = "Sin Asignar"
            return `Se a removido a ${pet.petName} de la celda`
        } else {
            return `El perro ${pet.petName} no se encuentra en la celda`
        }
    }
}

let dogsRooms = [new PetsRoom(3,1), new PetsRoom(3,2), new PetsRoom(2,3), new PetsRoom(5,4), new PetsRoom(3,5), new PetsRoom(2,6), new PetsRoom(2,7), new PetsRoom(1,8), new PetsRoom(1,9), new PetsRoom(1,10),]

let dogsInShelter = [new Pet('lola', 'pequeño', 'sobrepeso', 2, 'no', 'no', 'si', 'no'), new Pet('paco', 'grande', 'extremadamente delgado', 5, 'no', 'no', 'no', 'si'), new Pet('simon', 'gigante', 'ideal', 2, 'si', 'no', 'no', 'no'), new Pet('pico', 'mini', 'delgado', 2, 'no', 'no', 'no', 'si'), new Pet('tomas', 'mediano', 'extremadamente obeso', 2, 'no', 'si', 'no', 'no'), new Pet('lucas', 'grande', 'ideal', 2, 'no', 'no', 'no', 'no'), new Pet('sofia', 'pequeño', 'delgado', 2, 'no', 'no', 'si', 'no')]

let dogsInShelterList = document.querySelector(`.lists__pets`)
