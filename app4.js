const estados = [
  {
    estado: "sp",
    valor: 67836.43,
  },
  {
    estado: "rj",
    valor: 36678.66,
  },
  {
    estado: "mg",
    valor: 29229.88,
  },
  {
    estado: "es",
    valor: 27165.48,
  },
  {
    estado: "outros",
    valor: 19849.53,
  },
];

var valorTotal = 0;

const valores = [...estados.map((estado) => estado.valor)];
for (let valor of valores) {
  valorTotal += valor;
}

var percentualSp = (estados[0].valor / valorTotal) * 100;
var percentualRj = (estados[1].valor / valorTotal) * 100;
var percentualMg = (estados[3].valor / valorTotal) * 100;
var percentualEs = (estados[4].valor / valorTotal) * 100;
var percentualOutros = (estados[4].valor / valorTotal) * 100;

console.log(`Percentual de São Paulo: ${percentualSp.toFixed(1)}`);
console.log(`Percentual do Rio de Janeiro: ${percentualRj.toFixed(1)}`);
console.log(`Percentual de Minas Gerais: ${percentualMg.toFixed(1)}`);
console.log(`Percentual do Espirito Santo: ${percentualEs.toFixed(1)}`);
console.log(`Percentual de Outros: ${percentualOutros.toFixed(1)}`);
