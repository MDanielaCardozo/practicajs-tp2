/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

 let numero=0;
 let suma=0;
 let cadena;
 
 cadena = prompt("Ingrese un número");
 numero = parseInt(cadena);
 
 for (let i = 0; cadena != null; i++) {
     if (isNaN(numero)) {
         alert("Debe ingrese un valor numérico");
       } else {
         suma = suma + numero;
       }
 
     cadena = prompt("Ingrese un número");
     numero = parseInt(cadena);
 }
 
 document.write(suma); 
