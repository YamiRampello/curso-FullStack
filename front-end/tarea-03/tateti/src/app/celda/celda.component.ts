import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css'],
})
export class CeldaComponent {
  @Input() marca!: string;
}
