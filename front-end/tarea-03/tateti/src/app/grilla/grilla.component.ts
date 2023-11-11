import { Component } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
})
export class GrillaComponent {
  celdas = ['', '', '', '', '', '', '', '', ''];
  siguienteJugador!: boolean;
  ganador!: string;

  get cambiarTurnoJugador() {
    return this.siguienteJugador ? 'X' : 'O';
  }

  comenzarJuego(): void {
    for (let i = 0; i < 9; i++) {
      this.celdas = Array(9).fill('');
    }
    this.ganador = '';
    this.siguienteJugador = true;
  }

  manejarTurno(id: number): void {
    if (!this.celdas[id]) {
      this.celdas.splice(id, 1, this.cambiarTurnoJugador);
      this.siguienteJugador = !this.siguienteJugador;
    }
    this.ganador = this.calcularGanador();
  }

  calcularGanador(): string {
    const lineaGana: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineaGana.length; i++) {
      const [a, b, c] = lineaGana[i];

      if (
        this.celdas[a] &&
        this.celdas[a] === this.celdas[b] &&
        this.celdas[a] === this.celdas[c]
      ) {
        return this.celdas[a];
      }
    }
    return '';
  }
}
