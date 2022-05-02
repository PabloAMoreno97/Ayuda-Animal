class NewPets {
    constructor(petName, petType, petSize, petAge){
        this.name = petName;
        this.type = petType;
        this.size = petSize;
        this.age = petAge;
    }
    petAdded(){
        return `Se ha agregado a ${this.name} de ${this.age} años y estatura ${this.size} a la lista de ${this.type}s`
    }
}

const newPets = [];
let petType = 0;
let petSize = 0;
let ageIsNotNumeric = true;

petName = prompt('Ingresa el nombre de la nueva mascota');

while (petType == 0){
    petType = prompt('Ingresa el número correspondiente al tipo de la nueva mascota: 1)Gato - 2)Perro');
    if (petType == 1){
        petType = "gato";
    } else if (petType ==2){
        petType ="perro";
    } else{
        alert(`Por favor ingrese un tipo válido`);
        petType = 0;
    }
}

while(petSize == 0){
    petSize = Number(prompt(`Ingresa el número correspondiente al tamaño del nuevo ${petType}: 1)Pequeño - 2)Mediano - 3)Grande - 4)Gigante`));
    switch(petSize){
        case 1:
            petSize = "pequeño";
            break;
        case 2:
            petSize = "mediano";
            break;
        case 3:
            petSize = "grande";
            break;
        case 4:
            petSize = "gigante";
            break;
        default:
            petSize = 0;
    }
    if (petSize == 0){
        alert("Por favor ingrese un número válido");
    }
}

while (ageIsNotNumeric == true) {
    petAge = prompt('Ingresa la edad de la mascota en años');
    ageIsNotNumeric = isNaN(petAge)
    if(ageIsNotNumeric == true){
        alert("Por favor ingrese un valor numérico de edad")
    }
}

newPets.push(new NewPets (petName, petType, petSize, petAge));
alert(newPets[0].petAdded());