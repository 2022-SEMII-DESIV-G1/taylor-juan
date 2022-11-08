/*let A = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 01, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

sum = A[i][j] + Math.max(calc(A, i + 1, j), calc(A, i + 1, j + 1));*/

// JavaScript program for
// Recursive implementation of
// Max sum problem in a triangle

let N = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

//const N = 3

//  Function for finding maximum sum
function maxPathSum(N, i, j) {
  if (i == N.length) {
    return 0;
  }

  let total = N[i][j] + Math.max(calc(N, i + 1, j), calc(N, i + 1, j + 1));
  return total;
}

function maxPath(N) {
  return maxPathSum(N, 0, 0);
}
console.log(maxPath(N));

/* Driver program to test above functions */

// This code is contributed by shinjanpatra

//? Arreglo de la piramide
/*let array = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 01, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];*/

let array = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

//? Funcion que calcula la suma mayor
function calc(array, i, j) {
  if (i == array.length) {
    return 0;
  }
  console.log(Math.max(calc(array, i + 1, j) /*, calc(array, i + 1, j + 1)*/));
  let sum;
  sum =
    array[i][j] + Math.max(calc(array, i + 1, j), calc(array, i + 1, j + 1));
  return sum;
}
//? Llamada a la funcion calculadora
function maxSum(array) {
  return calc(array, 0, 0);
}

console.log("la suma mayor es: " + maxSum(array)); //llama a la funcion dandole el arreglo como parametro para imprimir
