import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { timeout } from 'rxjs';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
})
export class ListaPersonasComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'celular',
    'correoElectronico',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Persona>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _snackBar: MatSnackBar,
    private _personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por página';
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerPersonas() {
    this.loading = true;
    this._personaService.getPersonas().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
      },
      (error) => {
        this.loading = false;
        alert('Ocurrió un error');
      }
    );
  }

  eliminarPersona(id: number) {
    this.loading = true;

    this._personaService.deletePersona(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerPersonas(); //renderizar nuevamente
    });
  }

  mensajeExito() {
    this._snackBar.open('La persona fue eliminada con éxito', '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
