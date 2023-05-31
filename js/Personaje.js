export class Personaje {
  constructor(id, nombre, fuerza) {
    this.id = id;
    this.nombre = nombre;
    this.fuerza = fuerza;
  }
}

function getId() {
  return this.id;
}

function getFuerza() {
  return this.fuerza;
}

function getNombre(nombre) {
  return this.nombre;
}

function setNombre(nombre) {
  this.nombre = nombre;
}

function setFuerza(fuerza) {
  this.fuerza = fuerza;
}
