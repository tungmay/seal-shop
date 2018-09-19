import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string;

  constructor(router: ActivatedRoute) { 
    router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("name")){
        const name = paramMap.get("name");
        this.name = name;
      }
    });
  }

  ngOnInit() {
  }

  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event){
    // console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}
