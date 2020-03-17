import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
//modal ngxBootstrap
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})

export class CursosListaComponent implements OnInit {

  // cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  //modal
  bsModalRef: BsModalRef;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          //this.error$.next(true);
          this.handleError();
          return empty();
        }
        )
      );
  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

}
