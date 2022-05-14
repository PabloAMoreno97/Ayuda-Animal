class Pet {
    constructor(petName, petSize, petWeight, petAge, petDangerousToHumans, petDangerousToPets, petSick, petInSpecialTreatment){
    this.petName = petName;
    this.petSize = petSize;
    this.petWeight = petWeight;
    this.petAge = petAge;
    this.petDangerousToHumans = petDangerousToHumans;
    this.petDangerousToPets = petDangerousToPets;
    this.petSick = petSick;
    this.petInSpecialTreatment = petInSpecialTreatment;
    }
    petAdded(){
        return `Se ha agregado a ${this.petName} de ${this.petAge} años y estatura ${this.petSize} a la lista de ${this.petType}s`
    }
}

class Room {
    constructor(petsCapacity, petsInside){
        this.petsCapacity = petsCapacity;
        this.petsInside = petsInside;
    }
}
const room1 = new Room(3, 0)
const room2 = new Room(3, 0)
const room3 = new Room(2, 0)
const room4 = new Room(5, 0)
const room5 = new Room(3, 0)
const room6 = new Room(2, 0)
const room7 = new Room(2, 0)
const room8 = new Room(1, 0)
const room9 = new Room(1, 0)
const room10 = new Room(1, 0)
