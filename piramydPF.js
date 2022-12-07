var sumenor = 0;
var intera = 0;
var intera2 = 0;
var j = 0;
var repe = 0;

listafilas = [
  [3],
  [7, 8],
  [2, 4, 6],
  [8, 5, 9, 3],
  [2, 3, 4, 5, 6],
  [4, 8, 7, 6, 5, 4],
  [6, 9, 5, 7, 1, 4, 9],
];

rutanueva = new Array(listafilas.length);

left_to_right();

function left_to_right() {
  for (var i = 0; i < listafilas.length; i++) {
    console.log(listafilas[i]);
    if (i < 1) {
      sumenor = sumenor + listafilas[i][j];
      console.log(listafilas[i][j]);
      rutanueva[i] = listafilas[i][j];
    } else {
      if (listafilas[i][j] > listafilas[i][j + 1]) {
        sumenor = sumenor + listafilas[i][j];
        console.log(listafilas[i][j]);
        rutanueva[i] = listafilas[i][j];
      } else {
        j++;
        sumenor = sumenor + listafilas[i][j];
        console.log(listafilas[i][j]);
        rutanueva[i] = listafilas[i][j];
      }
    }
  }

  console.log("suma es: " + sumenor);
  console.log("------------------");
}

console.log("La ruta es: ");
for (let i = 0; i < rutanueva.length; i++) {
  console.log(rutanueva[i]);
}
console.log("la suma de la ruta es: " + sumenor);
