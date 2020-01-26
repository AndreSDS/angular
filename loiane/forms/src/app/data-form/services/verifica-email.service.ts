import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor( private http: HttpClient) { }

  verificaEmail( email: string) {
    return this.http.get('../../../assets/verificarEmail.json')
    .pipe(
      delay(2000),
      map((dados: {emails: any[]}) => dados.emails),
      map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
      map((dados: any[]) => dados.length > 0)
    );
  }
}
