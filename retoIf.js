var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

function juego (jugador1, maquina) {
    if (jugador1 === maquina) {
        console.log("Hay un empate")
    } else {
        if (jugador1 == opc1 && maquina == opc3) {
            console.log("Jugador 1 gana con Piedra")
        }
        else if (jugador1 == opc2 && maquina == opc1) {
            console.log("Jugador 1 gana con Papel")
        }
        else if (jugador1 == opc3 && maquina == opc2) {
            console.log("Jugador 1 gana con Tijera")
        }
        else {
            console.log("Máquina gana con " + maquina)
        }
    }
}