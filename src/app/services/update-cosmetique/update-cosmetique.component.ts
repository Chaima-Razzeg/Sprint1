import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CosmetiqueService } from '../cosmetique.service';
import { Cosmetique } from '../../model/cosmetique.model';
import { Rayon } from 'src/app/model/rayon.model';
@Component({
  selector: 'app-update-cosmetique',
  templateUrl: './update-cosmetique.component.html',
  styles: []
})
export class UpdateCosmetiqueComponent implements OnInit {
  currentCosmetique = new Cosmetique();
  rayons! : Rayon[];
  updatedRayId! : number;

  constructor(private activatedRoute: ActivatedRoute,

    private router :Router,
    private cosmetiqueService: CosmetiqueService) { }

  ngOnInit(): void {
    this.rayons = this.cosmetiqueService.listeRayons();
    this.currentCosmetique =
    this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot.params['id']);
    this.updatedRayId  =this.currentCosmetique.rayon?.idRay!;
       // console.log(this.route.snapshot.params.id);
    //console.log(this.currentCosmetique)

  }
  UpdateCosmetique() {
    this.currentCosmetique.rayon=this.cosmetiqueService.consulterRayon(this.updatedRayId);
    this.cosmetiqueService.updateCosmetique(this.currentCosmetique);
    this.router.navigate(['cosmetiques']);
    }
}

    
 
