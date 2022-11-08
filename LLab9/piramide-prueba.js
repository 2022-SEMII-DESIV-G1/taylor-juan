var suma = 0;
var intera = 0;
var intera2 = 0;
var j = 0;
var repe = 0;

listafilas = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
  /*[2, 3, 4, 5, 6],
  [4, 8, 7, 6, 5, 4],*/
];
do {
  for (var i = 0; i < listafilas.length; i++) {
    console.log(listafilas[i]);
    j = i;
    if (listafilas.length - 1 == intera) {
      intera = intera - 1;
      intera2 = intera;
    }
    if (i >= intera) {
      if (i == listafilas.length - intera) {
        j = j - 1;
        suma = suma + listafilas[i][j];
        console.log(listafilas[i][j]);
        console.log("salto 1");
      } else {
        if (i == listafilas.length - (intera2 - 1)) {
          j = j - 1;
          suma = suma + listafilas[i][j];
          console.log(listafilas[i][j]);
          console.log("salto 2");
        } else {
          suma = suma + listafilas[i][j];
          console.log(listafilas[i][j]);
          console.log("if 2" + " valor de i " + i);
        }
      }
    } else {
      suma = suma + listafilas[i][j];
      console.log(listafilas[i][j]);
      console.log("if 1");
    }
  }
  console.log(suma);
  console.log("suma es: " + suma);
  console.log("-----------------");
  repe++;
  intera = repe;
  suma = 0;
  j = 0;
} while (repe != listafilas.length);
