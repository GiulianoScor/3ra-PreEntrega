class Personajes {
    constructor (nombre, ataque1, vida, img1, img2) {
        this.name = nombre;
        this.damage = ataque1;
        this.life = vida;
        this.id = 0;
        this.img1 = img1;
        this.img2 = img2;
        this.class = this.name + "-nombre";
    }

    getNombres() {
        return this.name;
    }

    setId() {
        this.id = id++;
        
    }

    getId() {
        return this.id;
    }

    getAtaque() {
        return this.damage;
    }

    restarVida (x) {
        this.life = this.life - x;
    }

    getVidaActual () {
        return this.life;
    }

    perdedor() {
        if (this.life <= 0) {
            return true;
        }
    }

    getImg1 () {
        return this.img1;
    }

    getImg2 () {
        return this.img2;
    }


    getClass () {
        return this.class;
    }

}

let id = 1;

const coleccion = new Array();
let naruto = new Personajes ('Naruto', 'Rasengan', 100, "/imagenes/Naruto_Sage_Mode.png", "/imagenes/rasengan.png" );
let pain = new Personajes ('Pain', 'Devastacion', 100, "/imagenes/Pain posta.png", "/imagenes/devastacion.png" );
/* let sasuke = new Personajes ('Sasuke', 'Amaterasu', 100);
let kakashi = new Personajes ('Kakashi', 'Chidori', 100); PROXIMOS A AGREGAR*/
agregar_array(naruto,pain);

function agregar_array (...x) {
    coleccion.push(...x);
    for (const x of coleccion) {
        x.setId()
    }
};




