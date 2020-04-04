import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  nome: string;
  private readonly ap_key = 'api_key=RGAPI-01d6c391-094e-4961-9454-3bf2fe331dcf';
  private readonly url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.nome}?api_key=${this.ap_key}`;

  constructor(private http: HttpClient) { }
  
  getData(){
    //return this.url;
    console.log(this.nome);
    console.log(this.url);
    return this.http.get(this.url);
  }

}
