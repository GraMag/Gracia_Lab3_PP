import { Personaje } from "./Personaje.js";

export class Superheroe extends Personaje {
  constructor(id, nombre, fuerza, alias, editorial, arma) {
    super(id, nombre, fuerza);
    this.alias = alias;
    this.editorial = editorial;
    this.arma = arma;
  }
}

function getAlias() {
    return this.alias;
}

function getEditorial() {
    return this.editorial;
}

function getArma(){
    return this.arma;
}


function setAlias(alias) {
this.alias = alias;
}

function setEditorial(editorial) {
this.editorial = editorial;
}

function setArma(arma) {
    this.arma = arma;
}
