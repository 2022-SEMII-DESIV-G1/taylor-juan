var calcularlt = document.getElementById("contletra");
calcularlt.addEventListener("submit", (e) => {
  e.preventDefault();
  var palabra = document.getElementById("letras").value;
  console.log("las letras son: " + palabra);

  contletra = 0;
  rep = palabra.length;
  forpalabra = new Array(rep);
  array = new Array(rep);
  igual = 0;
  noigual = 0;
  var agrega = 0;

  console.log("la palabra tiene: " + rep + " letras");

  for (let i = 0; i < rep; i++) {
    forpalabra[i] = palabra.charAt(i);
    console.log("-----------");
  }

  for (let j = 0; j < rep; j++) {
    //console.log("Letra: "+j+" "+forpalabra[j]);
    letraactual = forpalabra[j];
    var letra = letraactual;
    var resultado = letra_procesada(letra);
    console.log(resultado);
    if (resultado === 2) {
      console.log("SI ENTRO AL IF ");
      for (let i = 0; i < rep; i++) {
        if (letraactual === forpalabra[i]) {
          contletra++;
        }
      }
      console.log(letraactual + ": " + contletra);
      contletra = 0;
    }
  }
  console.log(array[agrega]);
  console.log("la letra numero 2 es: " + forpalabra[2]);
});

function letra_procesada(letra) {
  console.log(letra);
  for (let i = 0; i < rep; i++) {
    if (letra === array[i]) {
      igual = 1;
      return igual;
    } else {
      noigual = 2;
      return noigual;
    }
  }
  if (noigual === 2) {
    array[agrega] = letra;
    agrega = agrega + 1;
  }
}

console.log("holaa");
