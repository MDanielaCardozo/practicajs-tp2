/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/

let numero;
let piramide;

numero = prompt("Ingrese un número del 1 al 50");
piramide = parseInt(numero);

if (isNaN(piramide) || piramide > 50 || piramide < 1) {
  alert("No se ingreso un numero del 1 al 50");
} else {
  for (let num = 1; num <= piramide; num++) {
    for (let cantidad = 0; cantidad < num; cantidad++) {
      document.write(num);
    }
    document.write("<br>");
  }
}
