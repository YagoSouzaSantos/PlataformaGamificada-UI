import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {

  @Input() backgroundImage= '';
  
  planet : any;
  showComponentX: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.planet = JSON.parse(params['planet']);
      this.backgroundImage = this.planet.background;
    });

    setTimeout(() => {
      this.showComponentX = false;
    }, 3000);
  }
}
