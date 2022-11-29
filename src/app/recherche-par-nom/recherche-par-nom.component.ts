import { CosmetiqueService } from './../services/cosmetique.service';
import { AuthService } from './../services/auth.service';
import { Cosmetique } from './../model/cosmetique.model';
import { Component, OnInit } from '@angular/core';
import { Rayon } from '../model/rayon.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  cosmetiques! : Cosmetique[];
  idRay! : number;
  rayons! : Rayon[];
  allCosmetiques! : Cosmetique[];

  constructor(public AuthService: AuthService,
              private cosmetiqueService: CosmetiqueService) { }

  ngOnInit(): void {
    this.allCosmetiques=this.cosmetiqueService.listeCosmetiques();
    this.rayons=this.cosmetiqueService.listeRayons();

  }
  onKeyUp(filterText : string){
    console.log(filterText);
    this.cosmetiques = this.allCosmetiques.filter(item => item.nomCosmetique?.toLowerCase().includes(filterText));
    }

    supprimerCosmetique(c: Cosmetique)
    {
        //console.log(c);
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
           this.cosmetiqueService.supprimerCosmetique(c);
    }
}
