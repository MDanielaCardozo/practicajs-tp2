/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo 
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
 deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

 let frase = prompt('Ingrese frase');

 for (let i = 0; frase.length; i++) {
    let caracter = frase.charAt(i); //recupera el caracter i del string
    if (i == frase.length -1) {
        document.write(caracter);
    } else {
        document.write(caracter + "-");
    }
 }
