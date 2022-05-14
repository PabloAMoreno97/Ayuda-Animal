class Pets {
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

const Pets = [];
