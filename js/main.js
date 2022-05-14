class NewPets {
    constructor(petName, petType, petSize, petAge){
        this.petName = petName;
        this.petType = petType;
        this.petSize = petSize;
        this.petAge = petAge;
    }
    petAdded(){
        return `Se ha agregado a ${this.petName} de ${this.petAge} años y estatura ${this.petSize} a la lista de ${this.petType}s`
    }
}

const newPets = [];
let petType = 0;
let petSize = 0;
let ageIsNotNumeric = true;

