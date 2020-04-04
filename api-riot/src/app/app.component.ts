import { AppServiceService } from './app-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  summonerName: string;
  summonerLevel: number;
  summonerIcon: number;
  
  constructor(private service: AppServiceService){}

  ngOnInit(){

  }

  getNome(){
    this.service.nome = this.nome;
  }
  getDados(){
    this.getNome();
    this.service.getData().subscribe((data:any)=>{
      console.log(data)
      //this.summonerName = data.name;
      //this.summonerLevel = data.summonerLevel;
      //this.summonerIcon = data.profileIconId;
    });
  }

}
