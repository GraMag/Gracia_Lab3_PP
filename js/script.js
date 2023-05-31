import { actualizarTabla } from "./tabla.js";
import { Superheroe } from "./Superheroe.js";

const $seccionTabla = document.getElementById("tabla"),
  $formulario = document.forms[0],
  superheroes = JSON.parse(localStorage.getItem("superheroes")) || [];

if (superheroes.length) actualizarTabla($seccionTabla, superheroes);

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("tablaSec").style.display = "flex";
  console.log("enviando...");

  const { id, nombre, fuerza, alias, editorial, arma } = $formulario;
  tabla.style.display = "flex";

  const heroe = new Superheroe(
    Date.now(),
    nombre.value,
    parseInt(fuerza.value),
    alias.value,
    editorial.value,
    arma.value
  );

  if (id === "") {
    handlerCreate(heroe);
  } else {
    heroe.id = parseInt(id);
    handlerUpdate(heroe);
  }

  $formulario.reset();
});

function actualizarStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function cargarForm(formulario, heroe) {
  formulario.id = heroe.id;
  formulario.txtNombre.value = heroe.nombre;
  formulario.txtAlias.value = heroe.alias;
  formulario.editorial.value = heroe.editorial;
  formulario.rngFuerza.value = heroe.fuerza;
  formulario.arma.value = heroe.arma;
}

window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    const id = e.target.parentElement.getAttribute("data-id");
    const heroeSeleccionado = superheroes.find(
      (heroe) => heroe.id === parseInt(id)
    );

    cargarForm($formulario, heroeSeleccionado);
  } else if (e.target.matches("button[id='eliminar']")) {
    handlerDelete(parseInt($formulario.id));
    $formulario.reset();
  } else if (e.target.matches("button[id='cancelar']")) {
    document.getElementById("tablaSec").style.display = "none";
  }
});

function handlerCreate(heroe) {
  superheroes.push(heroe);
  actualizar();
}

function handlerUpdate(updateHeroe) {
  let index = superheroes.findIndex((heroe) => heroe.id === updateHeroe.id);
  superheroes.splice(index, 1, updateHeroe);
  actualizar();
}

function handlerDelete(id) {
  let index = superheroes.findIndex((heroe) => heroe.id === id);
  superheroes.splice(index, 1);
  actualizar();
}

function actualizar() {
  actualizarTabla($seccionTabla, superheroes);
  actualizarStorage("superheroes", superheroes);
}
