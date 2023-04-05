//Función constructora
function auto(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

var AutoNuevo = new auto("Mazda", "CX5", "Negro", 2022);

var AutoNuevo2 = new auto("KIA", "Sportage", "Gris", 2020);

var AutoNuevo3 = new auto("Toyota", "Corolla", "Plateado", 2023)