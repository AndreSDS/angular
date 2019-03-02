import { Component, OnInit } from '@angular/core';
import { sanitizeStyle } from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/350/200/nature';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = 'abc';
  nomeDoCurso = 'Curso de Angular';

  onMudouValor(event){
    console.log(event.novoValor);
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {

    return true;
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onMouseOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
