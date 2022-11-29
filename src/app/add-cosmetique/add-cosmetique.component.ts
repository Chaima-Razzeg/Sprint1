import { Rayon } from './../model/rayon.model';
import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styleUrls: ['./add-cosmetique.component.css']
})
export class AddCosmetiqueComponent implements OnInit {
newCosmetique = new Cosmetique();
newIdRay! : number;
newRayon! : Rayon;
rayons! : Rayon[];
constructor(private cosmetiqueService: CosmetiqueService,
            private router :Router, ) { }
  ngOnInit(): void {

    this.rayons = this.cosmetiqueService.listeRayons();  }
addCosmetique(){
//console.log(this.newIdRay);
this.newRayon = 
this.cosmetiqueService.consulterRayon(this.newIdRay);
this.newCosmetique.rayon = this.newRayon;
this.cosmetiqueService.ajouterCosmetique(this.newCosmetique);
this.router.navigate(['cosmetiques']);
}
}
