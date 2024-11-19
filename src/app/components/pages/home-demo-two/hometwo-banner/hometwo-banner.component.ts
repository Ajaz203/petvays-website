import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {
            image: 'assets/img/pet1.png',
            title: 'Yummy Rawhide Bones',
            paragraph: '100% Genuine Products and We provide best products for your pet. We are here to care🐶',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'collection-dog-food',
            
        },
        {
            image: 'assets/img/pet2.png',
            title: 'Yummy Mutton Munchies',
            paragraph: '100% Genuine Products and We provide best products for your pet. We are here to care🐶',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'collection-dog-food',
           
        },
        { 
            image: 'assets/img/pet3.png',
            title: 'Natural Grooming Products',
            paragraph: '100% Genuine Products and We provide best products for your pet. We are here to care🐶',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'collection-dog-food',
           
        }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		margin: 5,
		dots: false,
		autoplay: true,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
                items: 1
			},
			576: {
                items: 1
			},
			768: {
                items: 1
			},
			992: {
                items: 1
			},
			1200: {
                items: 1
			}
		}
    }
    pageTitle = [
        {
          bgImage: 'assets/img/images/Homepagebanner.jpg',
          // title: 'Your Pets Deserve The Best'
        }
      ];
    
}