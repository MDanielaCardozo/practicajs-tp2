/*7- Haz un script que escriba una pirámide inversa de los números del 1 
al número que indique el usuario (no mayor de 50)  de la siguiente forma 
: (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero;
let piramide;

numero = prompt("Ingrese un número del 1 al 50");
piramide = parseInt(numero);

if (isNaN(piramide) || piramide > 50 || piramide < 1) {
  alert("No se ingreso un numero del 1 al 50");
} else {
  for (let num = piramide; num > 0; num--) {
    for (let cantidad = piramide; cantidad > 0; cantidad--) {
      document.write(num);
    }
    piramide--;
    document.write("<br>");
  }
}
