import { AuthService } from './../services/auth.service';
import { Cosmetique } from './../model/cosmetique.model';
import { Component, OnInit } from '@angular/core';
import { Rayon } from '../model/rayon.model';
import { CosmetiqueService } from '../services/cosmetique.service';

@Component({
  selector: 'app-recherche-par-rayon',
  templateUrl: './recherche-par-rayon.component.html',
  styles: [
  ]
})
export class RechercheParRayonComponent implements OnInit {
  cosmetiques : Cosmetique[] =[]; //un tableau de Cosmetique
  rayons! : Rayon[];
  IdRayon! : number;

  constructor(public AuthService: AuthService,
              private cosmetiqueService : CosmetiqueService) { }

  ngOnInit(): void {
    this.cosmetiques=this.cosmetiqueService.listeCosmetiques();
    this.rayons=this.cosmetiqueService.listeRayons();
  }
  onChange(){
    this.cosmetiques=this.cosmetiqueService.rechercherParRayon(this.IdRayon);
  }
  supprimerCosmetique(c: Cosmetique)
{
    //console.log(c);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
       this.cosmetiqueService.supprimerCosmetique(c);
}


}
