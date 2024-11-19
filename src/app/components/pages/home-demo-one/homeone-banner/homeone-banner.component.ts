import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {

            // test;
            subTitle: '100% Genuine Products',
            title: 'Pet Food Store',
            paragraph: 'We provide best products for your pet. Your Pet Our Passion. 🐶',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'OUR PRODUCTS',
            buttonLink: 'shop-full-width-1',
            image: 'assets/img/images/PetVays-video.mp4'
        }
        // {
        //     subTitle: 'NEW INSPIRATION 2020',
        //     title: 'Meals that your Dog will love!',
        //     paragraph: 'Food that your dog will love that are super healthy and nutrient-rich you’ve come to the right place.',
        //     buttonIcon: 'bx bx-shopping-bag',
        //     buttonText: 'SHOP OUR PRODUCTS',
        //     buttonLink: 'shop-full-width-1',
        //     image: 'assets/img/images/banner-2.jpg'
        // },
        // {
        //     subTitle: 'NEW INSPIRATION 2020',
        //     title: 'Shampoo for all hair types.',
        //     paragraph: 'Best Dog Shampoos for detangling, cleaning and moisturising to take mucky pups to dazzling dogs in a matter of minutes.',
        //     buttonIcon: 'bx bx-shopping-bag',
        //     buttonText: 'SHOP OUR PRODUCTS',
        //     buttonLink: 'shop-full-width-1',
        //     image: 'assets/img/images/banner-3.jpg'
        // }
    ]
    bannerSocialLinks = [
        {
            icon: 'bx bxl-facebook',
            link: '#'
        },
        {
            icon: 'bx bxl-twitter',
            link: '#'
        },
        {
            icon: 'bx bxl-linkedin',
            link: '#'
        },
        {
            icon: 'bx bxl-instagram',
            link: '#'
        }
    ]
    bannerContactInfo = [
        {
            number: '(+91)8630649605',
            email: 'info@petvays.com'
        }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		margin: 5,
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

}