import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  Coches = [
    
    {
      id: "abc8441",
      name:"Cactus",
      description:"fpaoejpfowjiepfjpwqij"
    },
    {
      id: "def8441",
      name:"A4",
      description:"fpaoejpfowjiepfjpwqij"  
    },
    {
      id: "def8441",
      name:"serie 4",
      description:"fpaoejpfowjiepfjpwqij"  
    }
  ];

  public id: string;
  
  constructor(private actRoute: ActivatedRoute, private _router:Router) {
     this.id = this.actRoute.snapshot.params['id'];

   }

  ngOnInit(): void {

  }

  onBack(): void{
    this._router.navigate(['/coche']);

  }
}
