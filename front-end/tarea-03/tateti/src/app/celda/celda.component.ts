import { Component } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css'],
})
export class CeldaComponent {
  turno = true;

  devolverAlgo($event: any) {
    //revisar
    console.log(this.turno);

    // return console.log($event.target,$event.target.textContent);
    if (this.turno) {
      $event.target.textContent = 'X';
      this.turno = !this.turno;
    } else {
      $event.target.textContent = 'O';
      this.turno = !this.turno;
    }
  }
}
