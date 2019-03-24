import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript',
    rating: 4.5321,
    numeroPaginas: 314,
    preco: 4.55,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  constructor() { }

  ngOnInit() {
  }

}
