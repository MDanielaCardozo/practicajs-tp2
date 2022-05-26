/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

let dni;
let resto;

cadena = prompt("Ingrese un número de DNI");
dni = parseInt(cadena);

for (i = 0; cadena != null; i++) {
  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Debe ingresar un dni válido");
  } else {
    resto = dni % 23;

    switch (resto) {
      case (resto = 0):
        document.write(`Al dni: ${dni} le corresponde la letra T <br>`);
        break;
      case (resto = 1):
        document.write(`Al dni: ${dni}  le corresponde la letra R <br>`);
        break;
      case (resto = 2):
        document.write(`Al dni: ${dni}  le corresponde la letra W <br>`);
        break;
      case (resto = 3):
        document.write(`Al dni: ${dni}  le corresponde la letra A <br>`);
        break;
      case (resto = 4):
        document.write(`Al dni: ${dni} le corresponde la letra G <br>`);
        break;
      case (resto = 5):
        document.write(`Al dni: ${dni}  le corresponde la letra M <br>`);
        break;
      case (resto = 6):
        document.write(`Al dni: ${dni}  le corresponde la letra Y <br>`);
        break;
      case (resto = 7):
        document.write(`Al dni: ${dni}  le corresponde la letra F <br>`);
        break;
      case (resto = 8):
        document.write(`Al dni: ${dni}  le corresponde la letra P <br>`);
        break;
      case (resto = 9):
        document.write(`Al dni: ${dni}  le corresponde la letra D <br>`);
        break;
      case (resto = 10):
        document.write(`Al dni: ${dni}  le corresponde la letra X <br>`);
        break;
      case (resto = 11):
        document.write(`Al dni: ${dni}  le corresponde la letra B <br>`);
        break;
      case (resto = 12):
        document.write(`Al dni: ${dni}  le corresponde la letra N <br>`);
        break;
      case (resto = 13):
        document.write(`Al dni: ${dni}  le corresponde la letra J <br>`);
        break;
      case (resto = 14):
        document.write(`Al dni: ${dni}  le corresponde la letra Z <br>`);
        break;
      case (resto = 15):
        document.write(`Al dni: ${dni}  le corresponde la letra S <br>`);
        break;
      case (resto = 16):
        document.write(`Al dni: ${dni}  le corresponde la letra Q <br>`);
        break;
      case (resto = 17):
        document.write(`Al dni: ${dni}  le corresponde la letra V <br>`);
        break;
      case (resto = 18):
        document.write(`Al dni: ${dni}  le corresponde la letra H <br>`);
        break;
      case (resto = 19):
        document.write(`Al dni: ${dni}  le corresponde la letra L <br>`);
        break;
      case (resto = 20):
        document.write(`Al dni: ${dni}  le corresponde la letra C <br>`);
        break;
      case (resto = 21):
        document.write(`Al dni:  ${dni} le corresponde la letra K <br>`);
        break;
      case (resto = 22):
        document.write(`Al dni: ${dni} le corresponde la letra E <br>`);
        break;
    }
  }

  cadena = prompt("Ingrese un número de DNI");
  dni = parseInt(cadena);
}
