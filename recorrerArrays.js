var Articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Televisor", costo: 2500},
    {nombre: "Libro", costo: 800},
    {nombre: "Celular", costo: 8500},
    {nombre: "Laptop", costo: 18000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
]

var artEconomicos = Articulos.filter(function(articulo){
    return articulo.costo <= 1500
});

var NombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encontrarArticulo = Articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

Articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})