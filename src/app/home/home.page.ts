import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public router: Router) {}

  slideOpts = {
    slidesPerView: 3,
    spaceBetween: -80
  };

  productSlideOption = {
    slidesPerView: 2,
    spaceBetween: 30
  };

  featuredSlideOption = {
    slidesPerView: 3,
    spaceBetween: 15
  };

  categories = [
    {
      id: "cat1",
      name: "Brand New"
    },
    {
      id: "cat2",
      name: "Clothes"
    },
    {
      id: "cat3",
      name: "Leather"
    },
    {
      id: "cat4",
      name: "Accessories"
    }
  ];

  fetchCategory(cat) {
    console.log(cat);
  }

  details() {
    this.router.navigate(["/details"]);
  }
}
