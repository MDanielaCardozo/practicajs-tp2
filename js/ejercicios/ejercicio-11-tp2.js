/*11- Realiza un script que pida por teclado 3 edades 
y 3 nombres e indique el nombre del mayor. */

let edadUno = 0, edadDos = 0, edadTres = 0;
let nombreUno, nombreDos, nombreTres;
let edad = 'a',nombre = 'a';

for( i = 0; i < 3 && edad != null && nombre != null; i++){
    if( i == 0 ){
        nombre = prompt('Ingrese nombre de la primera persona');
        nombreUno = nombre;
        edad = prompt('Ingrese edad de la primera persona');
        edadUno = parseInt(edad);
    }if( i == 1){
        nombre=prompt('Ingrese nombre de la segunda persona');
        nombreDos = nombre;
        edad = prompt('Ingrese edad de la segunda persona');
        edadDos = parseInt(edad);
    }if( i == 2){
        nombre = prompt('Ingrese nombre de la tercera persona');
        nombreTres = nombre;
        edad = prompt('Ingrese edad de la tercera persona');
        edadTres = parseInt(edad);
    }
}

if(edad != null && nombre != null){
if( edadUno > edadDos){
    if(edadUno > edadTres){
        document.write(`La persona ${nombreUno} es la de mayor edad`);
    }else{
        document.write(`La persona ${nombreTres} es la de mayor edad`);
    }
}else{
    if(edadDos > edadTres){
        document.write(`La persona ${nombreDos} es la de mayor edad`);
    }else{
        document.write(`La persona ${nombreTres} es la de mayor edad`);
    }
}
}





