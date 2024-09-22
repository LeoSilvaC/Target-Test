//int INDICE = 13, SOMA = 0, K = 0;
//Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
//Imprimir(SOMA);

const indice = 13;
var soma = 0;
var k = 0;

while (k < indice) {
  k++;
  soma += k;
}

console.log(soma);
