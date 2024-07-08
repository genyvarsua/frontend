let jugador = "X";
let color = "red";
let turno = 0;
function trazar(celda){
    if (celda.innerHTML === "") {
        celda.innerHTML=jugador;
        celda.style.color = color;
        turno = turno + 1;
        if(!validarcelda(jugador) && turno == 9) {
            console.log("estoy aca");
            document.getElementById("ganador").innerHTML="¡Se ha producido un empate!";
        }
        console.log(turno);
        if (jugador == "X"){
           jugador = "O";
           color = "blue"; 
        }else{
            jugador = "X";
            color = "red";
        }
    }
}
function validarcelda(jugador){
    //Valida primera horizoantal
    if (document.getElementById("celda1").textContent===jugador && document.getElementById("celda2").textContent===jugador && document.getElementById("celda3").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valdia segunda horizontal
    if (document.getElementById("celda4").textContent===jugador && document.getElementById("celda5").textContent===jugador && document.getElementById("celda6").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valida tercer horizontal
    if (document.getElementById("celda7").textContent===jugador && document.getElementById("celda8").textContent===jugador && document.getElementById("celda9").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valida primera vertical
    if (document.getElementById("celda1").textContent===jugador && document.getElementById("celda4").textContent===jugador && document.getElementById("celda7").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";    
        return true;
    }
    //Valida segunda vertical
    if (document.getElementById("celda2").textContent===jugador && document.getElementById("celda5").textContent===jugador && document.getElementById("celda8").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valida tercera vertical
    if (document.getElementById("celda3").textContent===jugador && document.getElementById("celda6").textContent===jugador && document.getElementById("celda9").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valida primera diagonal
    if (document.getElementById("celda1").textContent===jugador && document.getElementById("celda5").textContent===jugador && document.getElementById("celda9").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    //Valida segunda diagonal
    if (document.getElementById("celda3").textContent===jugador && document.getElementById("celda5").textContent===jugador && document.getElementById("celda7").textContent===jugador){
        document.getElementById("ganador").innerHTML="The winner is " + jugador + "!!!";
        return true;
    }
    return false;
}