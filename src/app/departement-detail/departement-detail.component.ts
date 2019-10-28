import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-departement-detail',
  template: `
     <h3>You selected departement with id = {{departementId}}</h3>
     <a  (click)="goSuivant()">Suivant</a>
     <br>
     <a (click)="goPrecedent()">précédent</a>
  `,
  styleUrls: ['./departement-detail.component.css']
})
export class DepartementDetailComponent implements OnInit {
  public departementId ; 
  constructor( private root  : ActivatedRoute, private router : Router) { }

  ngOnInit() {
   // let id = parseInt(this.root.snapshot.paramMap.get('id')); 
    //this.departementId = id;
    this.root.paramMap.subscribe((params : ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departementId = id;
    })
  }
  goSuivant(){
  let suivantId = this.departementId +1;
  this.router.navigate(['/departement', suivantId]);
  }
  goPrecedent(){
  let  precedentId = this.departementId-1;
  this.router.navigate(['/departement', precedentId]);
  }

}