function ejecutarEj_1() {
  const pizzas = {
    sabor: [
      'mozzarella',
      'especial',
      'napolitana',
      'fugazza con queso',
      'calabresa',
      'palmitos',
      'pollo',
      'espinaca',
      '4 quesos',
      'agridulce'
    ],
    precio: [3100, 4600, 4000, 3800, 4600, 5200, 5100, 4600, 5100, 5300]
  };

  const precioActualizado = pizzas.precio.map(actualizarPrecio);

  for (let i = 0; i < pizzas.sabor.length; i++) {
    console.log(`${pizzas.sabor[i]} - ${precioActualizado[i]}`);
  }

  function actualizarPrecio(precioActual) {
    const aumentoPrecio = 1.1;
    return Math.ceil(precioActual * aumentoPrecio);
  }
}

console.log('---Ejercicio 1---');
ejecutarEj_1();

function ejecutarEj_2() {
  const pizzas = [
    { sabor: 'mozzarella', precio: 3100 },
    { sabor: 'especial', precio: 4600 },
    { sabor: 'napolitana', precio: 4000 },
    { sabor: 'fugazza con queso', precio: 3800 },
    { sabor: 'calabresa', precio: 4600 },
    { sabor: 'palmitos', precio: 5200 },
    { sabor: 'pollo', precio: 5100 },
    { sabor: 'espinaca', precio: 4600 },
    { sabor: '4 quesos', precio: 5100 },
    { sabor: 'agridulce', precio: 5300 }
  ];

  function conocerPrecio(pizza) {
    return pizza.sabor === 'calabresa';
  }

  console.log(pizzas.find(conocerPrecio));
}

console.log('---Ejercicio 2---');
ejecutarEj_2();

function ejecutarEj_3() {
  const pizzas = [
    { sabor: 'mozzarella', precio: 3100 },
    { sabor: 'especial', precio: 4600 },
    { sabor: 'napolitana', precio: 4000 },
    { sabor: 'fugazza con queso', precio: 3800 },
    { sabor: 'calabresa', precio: 4600 },
    { sabor: 'palmitos', precio: 5200 },
    { sabor: 'pollo', precio: 5100 },
    { sabor: 'espinaca', precio: 4600 },
    { sabor: '4 quesos', precio: 5100 },
    { sabor: 'agridulce', precio: 5300 }
  ];

  let precioTotal = 0;
  let precioMedio = 0;

  for (let i = 0; i < pizzas.length; i++) {
    precioTotal = precioTotal + pizzas[i].precio;
  }
  precioMedio = precioTotal / pizzas.length;

  pizzasMenorPrecio = pizzas.filter(obtenerPizzasMenorPrecio);
  console.log(pizzasMenorPrecio);

  function obtenerPizzasMenorPrecio(pizzas) {
    if (pizzas.precio < precioMedio) {
      return pizzas.sabor;
    }
  }
}

console.log('---Ejercicio 3---');
ejecutarEj_3();

function ejecutarEj_4() {
  const pizzas = {
    sabor: [
      'mozzarella',
      'especial',
      'napolitana',
      'fugazza con queso',
      'calabresa',
      'palmitos',
      'pollo',
      'espinaca',
      '4 quesos',
      'agridulce'
    ],
    precio: [3100, 4600, 4000, 3800, 4600, 5200, 5100, 4600, 5100, 5300]
  };

  /*
  const precioTotal = pizzas.precio.reduce(function (acumulador, precioActual) {
    return acumulador + precioActual;
  });*/

  const precioTotal = pizzas.precio.reduce(
    (precio1, precio2) => precio1 + precio2
  );
  const precioMedio = precioTotal / pizzas.precio.length;

  console.log(`El precio medio de las pizzas es $${precioMedio}`);
}

console.log('---Ejercicio 4---');
ejecutarEj_4();

function ejecutarEj_5() {
  function identificarExpresion(numero, operacionMatematica) {
    if (!operacionMatematica) return numero;
    return operacionMatematica(numero);
  }

  // Generar numeros
  function generar_1(operacionMatematica) {
    return identificarExpresion(1, operacionMatematica);
  }
  function generar_2(operacionMatematica) {
    return identificarExpresion(2, operacionMatematica);
  }
  function generar_3(operacionMatematica) {
    return identificarExpresion(3, operacionMatematica);
  }
  function generar_4(operacionMatematica) {
    return identificarExpresion(4, operacionMatematica);
  }
  function generar_5(operacionMatematica) {
    return identificarExpresion(5, operacionMatematica);
  }
  function generar_6(operacionMatematica) {
    return identificarExpresion(6, operacionMatematica);
  }
  function generar_7(operacionMatematica) {
    return identificarExpresion(7, operacionMatematica);
  }
  function generar_8(operacionMatematica) {
    return identificarExpresion(8, operacionMatematica);
  }
  function generar_9(operacionMatematica) {
    //console.log(operacionMatematica) //undefined
    return identificarExpresion(9, operacionMatematica);
  }

  // Operaciones matemáticas
  function sumar(numero1) {
    return function (numero2) {
      return numero1 + numero2;
    };
  }
  function restar(numero1) {
    return function (numero2) {
      return numero2 - numero1;
    };
  }
  function multiplicar(numero1) {
    return function (numero2) {
      return numero1 * numero2;
    };
  }
  function dividir(numero1) {
    return function (numero2) {
      return Math.trunc(numero2 / numero1);
    };
  }

  console.log(generar_7(multiplicar(generar_5())));
  console.log(generar_4(sumar(generar_9())));
  console.log(generar_8(restar(generar_3())));
  console.log(generar_6(dividir(generar_2())));
  console.log(generar_1(dividir(generar_2())));
}

console.log('---Ejercicio 5---');
ejecutarEj_5();
