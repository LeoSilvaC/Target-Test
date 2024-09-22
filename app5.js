const string = "ABCDEFGHIFJKLMOPQRSTUVWXZ";
let invertido = "";

for (let s = string.length - 1; s >= 0; s--) {
  invertido += string[s];
}

console.log(invertido);
