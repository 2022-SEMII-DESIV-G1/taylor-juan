var sumayor = 0,
  sumenor = 0;
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
rutamayor = new Array(listafilas.length);
rutanueva = new Array(listafilas.length);

left_to_right();

function left_to_right() {
  do {
    for (var i = 0; i < listafilas.length; i++) {
      console.log(listafilas[i]);
      if (listafilas.length - 1 == intera) {
        intera = intera - 1;
        intera2 = intera;
      }
      if (i >= intera) {
        if (i == listafilas.length - intera) {
          j = j + 1;
          sumenor = sumenor + listafilas[i][j];
          console.log(listafilas[i][j]);
          rutanueva[i] = listafilas[i][j];
          console.log("salto 1");
        } else {
          if (i == listafilas.length - (intera2 - 1)) {
            j = j + 1;
            sumenor = sumenor + listafilas[i][j];
            console.log(listafilas[i][j]);
            rutanueva[i] = listafilas[i][j];
            console.log("salto 2");
          } else {
            sumenor = sumenor + listafilas[i][j];
            console.log(listafilas[i][j]);
            rutanueva[i] = listafilas[i][j];
            console.log("if 2" + " valor de i " + i);
          }
        }
      } else {
        sumenor = sumenor + listafilas[i][j];
        console.log(listafilas[i][j]);
        rutanueva[i] = listafilas[i][j];
        console.log("if 1");
      }
    }

    if (sumayor < sumenor) {
      sumayor = sumenor;
      var sumayor1 = sumayor;
      for (let i = 0; i < rutamayor.length; i++) {
        rutamayor[i] = rutanueva[i];
      }
    }

    console.log("suma es: " + sumenor);
    console.log("------------------");
    repe++;
    intera = repe;
    sumenor = 0;
    j = 0;
  } while (repe != listafilas.length);
}

console.log("La ruta es: ");
for (let i = 0; i < rutanueva.length; i++) {
  console.log(rutamayor[i]);
}
console.log("la suma de la ruta mayor es: " + sumayor);
