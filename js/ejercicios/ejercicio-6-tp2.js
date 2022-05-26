/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

let numero;
let piramide;

// numero =prompt("Ingrese un número del 1 al 30");
// piramide = parseInt(cadena);

// if(piramide==null || isNaN(numero))
// {
//     document.write ('NO SE INGRESO NINGUN VALOR NUMÉRICO');      
// }
// else

    for ( let numero = 1 ; numero <= 30 ; numero ++){
       for(let piramide = 0 ; piramide < numero; piramide ++)
       {
        document.write(numero);
       }  
       document.write('<br>')
    }
