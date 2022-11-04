import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './species-details.page.html',
  styleUrls: ['./species-details.page.scss'],
})
export class SpeciesDetailsPage implements OnInit {

  Spece: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getStarship(id).subscribe(res => {
    this.spece = res;

  });
  }
}
