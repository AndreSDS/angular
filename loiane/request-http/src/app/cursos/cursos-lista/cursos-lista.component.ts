import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, take, switchMap } from 'rxjs/operators';
//modal ngxBootstrap
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  cursoSelecionado: Curso;
  //modal
  bsModalRef: BsModalRef;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private modalService: BsModalService,
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.log(error);
          this.handleError();
          return EMPTY;
        }
        )
      );
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    const result$ = this.alertService.showConfirm('Confirmação', 'Deseja remover este curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(res => res ? this.service.remove(curso.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
          this.alertService.showAlertSuccess(`Curso: ${this.cursoSelecionado.nome}, foi removido.`);
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      )
  }

}
