import { CosmetiqueService } from './../services/cosmetique.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rayon } from '../model/rayon.model';

@Component({
  selector: 'app-liste-rayons',
  templateUrl: './liste-rayons.component.html',
  styles: [
  ]
})
export class ListeRayonsComponent implements OnInit {
  rayons! : Rayon[];
  updatedRay:Rayon = {"idRay":0,"nomRay":""};
  ajout:boolean=true;

 



  constructor(private cosmetiqueService : CosmetiqueService) { }

  ngOnInit(): void {
    this.rayons=this.cosmetiqueService.listeRayons();
  }
  rayonUpdated(ray:Rayon){
    this.cosmetiqueService.ajouterRayon(ray);
    }
    updateRay(ray:Rayon) {
      this.updatedRay=ray;
      this.ajout=false;

      }

   
        
}
