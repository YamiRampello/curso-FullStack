//Ejercicio 1
class Stack {
  private stackArray: Array<string | number> = [];

  push(elemento: string | number) {
    this.stackArray.push(elemento);
  }

  pop() {
    this.stackArray.pop();
  }

  size(): number {
    return this.stackArray.length;
  }
}

const stack = new Stack();
stack.push(365);
stack.push('segundo elemento agregado');
console.log(stack);
console.log(stack.size());
stack.pop();
console.log(stack);
console.log(stack.size());


//Ejercicio 2
abstract class Figura {
  tipo: string;

  constructor(tipo: string) {
    this.tipo = tipo;
  }

  abstract perimetro(): number;
  abstract area(): number;
}

class Cuadrado extends Figura {
  lado: number;
  cantidadLados: number;

  constructor(lado: number) {
    super('Cuadrado');
    this.lado = lado;
    this.cantidadLados = 4;
  }

  perimetro(): number {
    return this.lado * this.cantidadLados;
  }
  area(): number {
    return this.lado * this.lado;
  }
}
class Circulo extends Figura {
  radio: number;
  diametro: number;

  constructor(radio: number) {
    super('Circulo');
    this.radio = radio;
    this.diametro = radio * 2;
  }

  perimetro(): number {
    return Math.PI * this.diametro;
  }

  area(): number {
    return Math.PI * this.radio ** 2;
  }
}

const cuadrado = new Cuadrado(6)
console.log('perimetro cuadrado',cuadrado.perimetro())
console.log('area cuadrado',cuadrado.area())

const circulo = new Circulo(3)
console.log('perimetro circulo',circulo.perimetro())
console.log('area circulo',circulo.area())
