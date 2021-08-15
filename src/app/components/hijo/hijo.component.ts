import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: String = 'Sin Nombre'
  @Output() cambioNombreHijo =  new EventEmitter<String>();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  cambiarNombreHijo(){
    this.nombreHijo = "Sidney Garcia"
    this.cambioNombreHijo.emit(this.nombreHijo)
    this.dataService.nombreUsuario = this.nombreHijo
  }
}
