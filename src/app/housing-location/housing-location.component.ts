import {Component, Input} from '@angular/core';
import {HousingLocation} from "../housinglocation";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  styleUrls: ['./housing-location.component.css'],
  template: `
    <section class="listing">
      <img
          class="listing-photo"
          [src]="housingLocation.photo"
          alt="Exterior photo of {{ housingLocation.name }}"
          crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  imports: [
    RouterLink
  ]
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
