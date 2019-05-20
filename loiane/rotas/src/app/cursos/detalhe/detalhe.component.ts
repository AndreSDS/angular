import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;

        this.curso = this.cursoService.getCurso(this.id);

        if (this.id == null) {
          this.router.navigate(['/naoEncontrado', this.id]);
        }
      }
    );
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
