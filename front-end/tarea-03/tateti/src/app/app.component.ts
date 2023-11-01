import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tateti';

  changeTitle() {
    this.title = 'changed';
  }

  names = [
    {jugador: '1', estado:'juega'},
    {jugador: '2', estado:'juega'}];

cambiarJugada(estado:string):string{
  return estado === 'juega' ? 'aca funcion click' : 'aca pisar clase a azul'

}

  definirJugada() {
    //si ya hay un click, que le toque al otro: turno = 'jugador 2'
    if ('a') {
      console.log('le toca al otro');
    }
  }
}
