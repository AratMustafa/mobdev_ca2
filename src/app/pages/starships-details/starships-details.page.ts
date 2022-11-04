import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './starships-details.page.html',
  styleUrls: ['./starships-details.page.scss'],
})
export class StarshipsDetailsPage implements OnInit {

  Starship: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getStarships(id).subscribe(res => {
    this.Starship = res;

  });
  }
}
