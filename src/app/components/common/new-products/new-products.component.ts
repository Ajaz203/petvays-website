import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-products',
    templateUrl: './new-products.component.html',
    styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
  // Delicious Biscuits & Chews
  singleProductsBox = [
    {
      mainImg: 'assets/img/product-images/1.jpg',
      detailsLink: 'simple-product'
    },
    {
      mainImg: 'assets/img/product-images/9.jpg',
      detailsLink: 'simple-product'
    },
    {
        mainImg: 'assets/img/product-images/raw.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/5.jpg',
        detailsLink: 'simple-product'
    }
  ];

  // Yummy Munchies Sticks
  singleProductsBox1 = [
    {
      mainImg: 'assets/img/product-images/3.jpg',
      detailsLink: 'simple-product'
    },
    {
      mainImg: 'assets/img/product-images/11.jpg',
      detailsLink: 'simple-product'
    },
    {
        mainImg: 'assets/img/product-images/10.jpg',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/double-munchies.png',
        detailsLink: 'simple-product'

    }
  ];

  // Easy Grooming
  singleProductsBox2 = [
    {
      mainImg: 'assets/img/product-images/Products4.png',
      detailsLink: 'simple-product'
    },
    {
      mainImg: 'assets/img/product-images/Products5.png',
      detailsLink: 'simple-product'
    },
    {
        mainImg: 'assets/img/product-images/Products6.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products7.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products8.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products9.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products10.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products11.png',
        detailsLink: 'simple-product'

    },
    {
        mainImg: 'assets/img/product-images/Products12.png',
        detailsLink: 'simple-product'

    }
  ];

  // Carousel Options for Owl Carousel
  productsSlidesOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>"
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 2 },
      992: { items: 4 },
      1200: { items: 4 }
    }
  };


}