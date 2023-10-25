arregloPrueba = [1, 2, 3];

function crearFuncionMap(arreglo, funcionCallBack) {
  let arregloResultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    arregloResultado[i] = funcionCallBack(arreglo[i], i, arreglo);
  }
  return arregloResultado;
}

const arregloResultado = crearFuncionMap(arregloPrueba, function (numero) {
  return numero ** 2;
});
console.log(arregloResultado);

const arregloResultadoMap = arregloPrueba.map(function (numero) {
  return numero ** 2;
});
console.log(arregloResultadoMap);

function crearFuncionFilter(arreglo, funcionFiltro) {
  const arregloFiltrado = [];

  for (let i = 0; i < arreglo.length; i++) {
    const numero = funcionFiltro(arreglo[i], i, arreglo);

    if (numero) {
      arregloFiltrado.push(arreglo[i]);
    }
  }
  return arregloFiltrado;
}

const resultadoMiFilter = crearFuncionFilter(arregloPrueba, function (numero) {
  return numero > 2;
});
console.log(resultadoMiFilter);

const resultadoFilter = arregloPrueba.filter(function (numero) {
  return numero > 2;
});
console.log(resultadoFilter);
