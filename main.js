// Creacion de variables
const key_storage = "partidaActual" ;
let personaje_actual = "";
let objIng;
let danio;
let barraAcumulacion = 22;
let btElejido = document.querySelectorAll(".opcion"); // Seleccionamos todos los botones con la clase 'opcion'

// Iteramos sobre todos los botones seleccionados
for (const boton of btElejido) {
    boton.addEventListener("click", function() {
        // Guardamos el personaje actual basado en el botón que se presionó
        personaje_actual = boton.textContent; 
        console.log("Personaje seleccionado: " + personaje_actual);
        
        detectarPj(coleccion);
        
        const objetoPrincipal = new Personajes ();
        Object.assign (objetoPrincipal, objIng)
        console.log (objetoPrincipal)

//Chequea haber tocado un boton
        if (personaje_actual){
            let filtrar = coleccion.filter ((x) => x.getNombres() != personaje_actual)
            console.log (filtrar);

            detectarPjRestantes(filtrar);

// Guarda el objeto ingresado en uno nuevo
            const objetoSecundario = new Personajes ();
            Object.assign (objetoSecundario, objIng)
            console.log (objetoSecundario)

// Con esto empieza la pagina 
            let inicio = document.querySelector(".overlay");
            inicio.innerHTML = "";
            inicio.classList.toggle("overlay");
            

// Se agrega el respectivo personaje de acuerdo a lo seleccionado           
            let player = document.getElementById("p1");
            player.innerHTML = ""; 
            console.log (objetoPrincipal.getClass())
            let playerOne = document.createElement("div");
            playerOne.innerHTML = ` <div>
                                        <img src="${objetoPrincipal.getImg1()}" alt="${objetoPrincipal.getNombres()}">
                                        <p class="${objetoPrincipal.getClass()}">${objetoPrincipal.getNombres()}</p>
                                    </div>
                                    <div class="animacion-container animacion">
                                    <img src="${objetoPrincipal.getImg2()}" alt="Animacion de ataque" >
                                    </div>
                                `
            
            player.appendChild(playerOne);

// Se agrega el respectivo personaje secundario de acuerdo a lo seleccionado            
            let player_dos = document.getElementById("p2");
            player_dos.innerHTML = ""; 
            console.log (objetoSecundario.getClass())
            let playerDos = document.createElement("div");
            playerDos.innerHTML = `
                                <div>
                                <img src="${objetoSecundario.getImg1()}" alt="${objetoSecundario.getNombres()}"> 
                                <p class="${objetoSecundario.getClass()}">${objetoSecundario.getNombres()}</p> 
                                </div>
                                `;
            player_dos.appendChild(playerDos);

// Agregar el menu desplegable 
            let opcionesBatalla = document.getElementById("opcionesBatalla");
            opcionesBatalla.innerHTML = "";
            let opcBatalla = document.createElement("div");
            opcBatalla.innerHTML = `
            
                                    <button id= "desp" class="battle-button" >Ataques</button>
                                    <button class="battle-button" >Objetos</button> 
                                    <!-- Opciones desplegables -->
                                    <div class="menu-emergente">
                                    <div id="ataque1" class="menu-item battle-button ${(objetoPrincipal.getAtaque()).toLowerCase()}" >
                                    <span class="text">${objetoPrincipal.getAtaque()}</span>
                                    </div>
                                    <div class="menu-item battle-button proximamente">
                                    <span class="text"> proximamente </span>
                                    </div>
                                    <div class="menu-item battle-button proximamente">
                                    <span class="text"> proximamente </span>
                                    </div>
                                    <div class="menu-item battle-button proximamente">
                                    <span class="text"> proximamente </span>
                                    </div>

                                    `
            opcionesBatalla.appendChild(opcBatalla);
// Narrador de la batalla, a actualizar
            let narrador = document.querySelector("#narra1");
            narrador.innerHTML = "";
            let narrar = document.createElement("div");
            narrar.innerHTML = `
                                    <div>
                                    <div class="narrador">
                                    <p>
                                    !Bienvenidos a mi simulador de batalla de Naruto! \n En la batalla de hoy tendremos a ${(objetoPrincipal.getNombres()).toUpperCase()} vs ${(objetoSecundario.getNombres()).toUpperCase()}. \n INFORMACION IMPORTANTE!!! La pagina actualmente no es responsive, se recomienda jugar con un zoom del 150% para no ver las opciones desfasadas. Muchas gracias!
                                    </p>
                                    </div>
                                    `
            narrador.appendChild(narrar);

            }
// Funcion de batalla, a actualizar            
        atacar();

//Storage todavia no utilizable por falta de datos a guardar con respecto a la batalla.
        document.addEventListener("DOMContentLoaded",()=>{


            storage  = JSON.stringify(localStorage.setItem(key_storage));
        
        
        
        })
    
    });
}






function detectarPj(x) {
    objIng = x.find((x) => x.getNombres() === personaje_actual);
    return objIng;
}

//Funcion simplificada para la seleccion del personaje rival, cuando haya mas personajes que elegir se modificara.
function detectarPjRestantes (x) {
    objIng = x.find ((x) => x.getNombres() !== personaje_actual)
    return objIng;
}


function atacar() {

    const menu_ataque = document.querySelector("#desp")
    menu_ataque.addEventListener("click", () => {
        const menu = document.querySelector(".menu-emergente");
        menu.classList.toggle("active");
    })
    const ataque = document.querySelector("#ataque1");
    ataque.addEventListener("click", () => {
        const animacion = document.querySelector(".animacion");
        animacion.classList.add("animacion-activa");  // Activa la animación
        const barraVida = document.querySelector(".right");
        const danio = danioAtaque(3);  // Calculamos el daño
        barraAcumulacion = (barraAcumulacion - danio);  // Asignamos el ancho como porcentaje, restando el daño
        barraVida.style.width = barraAcumulacion + '%';
        console.log("El daño realizado es de: " + danio);
        return barraAcumulacion;

        
    });
}

function danioAtaque(max) {
    const danio = Math.floor(Math.random() * (max + 1));
    return danio;
}







// while (objetoPrincipal.getVidaActual() >=0 && objetoSecundario.getVidaActual() >=0 ){
//     if (atacar()){
//         console.log(`${objetoPrincipal.getNombres()} realiza ${danioAtaque(30)} de daño, utilizando ${objetoPrincipal.getAtaque()}.`);
//     }
//     console.log(`${objetoPrincipal.getNombres()} realiza ${danioAtaque(30)} de daño, utilizando ${objetoPrincipal.getAtaque()}.`);
//     objetoSecundario.restarVida(danio);
//     if (objetoSecundario.getVidaActual() <= 0) {
//         console.log (` \n ¡El ultimo ${objetoPrincipal.getAtaque()} ha sentenciado el combate terminando con la vida de su oponente!`)
//         break;
//     }
//     console.log ( ` La vida restante de ${objetoSecundario.getNombres()} es de ${objetoSecundario.getVidaActual()}`)
//     console.log ("-------------------------      #      -------------------------")
//     console.log(`${objetoSecundario.getNombres()} realiza ${danioAtaque(30)} de daño, utilizando ${objetoSecundario.getAtaque()}.`);
//     objetoPrincipal.restarVida(danio);
//     if (objetoPrincipal.getVidaActual() <= 0) {
//         console.log (` \n ¡El ultimo ${objetoSecundario.getAtaque()} ha sentenciado el combate terminando con la vida de su oponente!`)
//         break;
//     }
//     console.log ( ` La vida restante de ${objetoPrincipal.getNombres()} es de ${objetoPrincipal.getVidaActual()}`)
//     console.log ("-------------------------      #      -------------------------")
// }

// if (objetoPrincipal.perdedor()) {
//     console.log (`La batalla ha terminado, ${objetoPrincipal.getNombres()} se ha debilitado por lo tanto el ganador es ${(objetoSecundario.getNombres()).toUpperCase()}!!!`)
// } else if (objetoSecundario.perdedor()){
//     console.log (`La batalla ha terminado, ${objetoSecundario.getNombres()} se ha debilitado por lo tanto el ganador es ${(objetoPrincipal.getNombres()).toUpperCase()}!!!`)
// }








