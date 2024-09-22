var anterior = 0;
var atual = 1;
const num = 7;

if (num < 0) {
  console.log("Este numero não pertence a sequencia de Fibonacci.");
}

while (anterior < num) {
  total = anterior;
  anterior = atual;
  atual = total + anterior;
}
if (anterior == num) {
  console.log("Este numero pertence a sequencia de Fibonacci.");
} else {
  console.log("Este numero NÃO pertence a sequencia de Fibonacci.");
}
