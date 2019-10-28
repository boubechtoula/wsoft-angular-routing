import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-departement-detail',
  template: `
     <h3>You selected departement with id = {{departementId}}</h3>
  `,
  styleUrls: ['./departement-detail.component.css']
})
export class DepartementDetailComponent implements OnInit {
  public departementId ; 
  constructor( private root  : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.root.snapshot.paramMap.get('id')); 
  this.departementId = id;
  }

}