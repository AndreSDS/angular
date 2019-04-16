import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detahe',
  templateUrl: './detahe.component.html',
  styleUrls: ['./detahe.component.css']
})
export class DetaheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
