import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ApiService } from '../..//services/api.service';


@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  people: Observable<any>;
  
  constructor(private navController: NavController, private router: Router, private api: ApiService) { }



  ngOnInit() {
    this.species = this.api.getSpecies();
    
}
openDetails(species) {
  let split = species.url.split('/');
  let speciesId = split[split.length-2];
  this.router.navigateByUrl(`/tabs/species/${speciesId}`);
  }

  }
  

