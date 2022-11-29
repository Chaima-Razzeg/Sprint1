import { Rayon } from './../model/rayon.model';
import { Injectable } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';

@Injectable({
  providedIn: 'root'
})
export class CosmetiqueService {

  cosmetiques : Cosmetique[]; //un tableau de Cosmetique
  rayons! : Rayon[]; //tableau de rayon
  cosmetique! : Cosmetique;
  cosmetiqueRecherche! :Cosmetique[]
  cosmetiqueRecherche2! :Cosmetique[]



  consulterCosmetique(id:number): Cosmetique{
this.cosmetique = this.cosmetiques.find(c => c.idCosmetique == id)!;
return this.cosmetique;
}

  constructor() { 
    this.rayons = [
      {idRay : 1, nomRay : "Soin Visage"},
      {idRay : 2, nomRay : "Soin cheveux"},
      {idRay : 3, nomRay : "Soin main et pied"},
      {idRay : 4, nomRay : "Soin du corps"},



    ]
  this.cosmetiques = [
{idCosmetique : 1, nomCosmetique : "Huile Amincissante", prixCosmetique : 29.900,
 dateCreation : new Date("01/10/2021"), rayon : {idRay : 4, nomRay : "Soin du corps"}},
{idCosmetique : 2, nomCosmetique : "Bain d’huile pour Cheveux ", prixCosmetique : 23.900, 
dateCreation : new Date("10/10/2021"), rayon :  {idRay : 2, nomRay : "Soin cheveux"}},
{idCosmetique : 3, nomCosmetique : "Crème Hydratante Vitamine C SPF 30", prixCosmetique : 46.900,
 dateCreation : new Date("03/11/2022"), rayon : {idRay : 1, nomRay : "Soin Visage"}},
{idCosmetique : 4, nomCosmetique : "Gel Nettoyant peaux sensibles", prixCosmetique : 30.900, 
dateCreation : new Date("01/10/2022"), rayon : {idRay : 1, nomRay : "Soin Visage"}},
{idCosmetique : 5, nomCosmetique : "Soin Protecteur Cheveux SPF 30" , prixCosmetique : 32.900, 
dateCreation : new Date("05/10/2022"), rayon :  {idRay : 2, nomRay : "Soin cheveux"}},
];
  }
  listeCosmetiques():Cosmetique[] {
  return this.cosmetiques;
}
ajouterCosmetique( cos: Cosmetique){
this.cosmetiques.push(cos);
}
supprimerCosmetique( cos: Cosmetique){
//supprimer le produit cos du tableau cosmetiques
const index = this.cosmetiques.indexOf(cos, 0);
if (index > -1) {
this.cosmetiques.splice(index, 1);
}
//ou Bien
/* this.cosmetiques.forEach((cur, index) => {
if(cos.idCosmetique === cur.idCosmetique) {
this.cosmetiques.splice(index, 1);
}
}); */
}
updateCosmetique(c:Cosmetique)
{
// console.log(c);
this.supprimerCosmetique(c);
this.ajouterCosmetique(c);
this.trierCosmetiques();
}
trierCosmetiques(){
  this.cosmetiques = this.cosmetiques.sort((n1,n2) => {
  if (n1.idCosmetique! > n2.idCosmetique!) {return 1;}
  if (n1.idCosmetique! < n2.idCosmetique!) {return -1;}
  return 0;
  });
  }

  listeRayons():Rayon[] {
    return this.rayons;
    }
  consulterRayon(id:number): Rayon{
    return this.rayons.find(ray => ray.idRay == id)!;
    }
  rechercherParRayon(idRay : number): Cosmetique[]{
    this.cosmetiqueRecherche = [];

    this.cosmetiques.forEach((cur,index) =>{
      if (idRay == cur.rayon?.idRay){
        console.log("cur "+cur);
        this.cosmetiqueRecherche.push(cur);
      }
    });
    return this.cosmetiqueRecherche;

  }
  rechercherParNom(nomRay : String): Cosmetique[]{
    this.cosmetiqueRecherche = [];

    this.cosmetiques.forEach((cur,index) =>{
      if (nomRay == cur.rayon?.nomRay){
        console.log("cur "+cur);
        this.cosmetiqueRecherche.push(cur);
      }
    });
    return this.cosmetiqueRecherche;

  }
  ajouterRayon( ray: Rayon){
    this.rayons.push(ray);
    
}
}
