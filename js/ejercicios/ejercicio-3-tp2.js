/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

let cadena;
let concat;
cadena = prompt("Escriba una cadena de texto para salir pulse cancelar");

for (let i = 0, j = 0; cadena != null; i++) {
  if (i == 0) {
    concat = cadena;
  } else {
    cadena = prompt("Escriba una cadena de texto para salir pulse cancelar");
    if (cadena != null) {
      concat = concat + "-" + cadena;
    }
  }
}

document.write(concat);
