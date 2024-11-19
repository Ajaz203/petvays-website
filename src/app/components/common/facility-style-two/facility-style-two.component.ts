import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-facility-style-two',
    templateUrl: './facility-style-two.component.html',
    styleUrls: ['./facility-style-two.component.scss']
})
export class FacilityStyleTwoComponent implements OnInit {

    constructor(private meta: Meta, public title: Title) { 

        this.meta.addTags([
            { name: 'description', content: 'PetVays Provides Biscuits, Mutton Munchies, Rawhide Bones, Natural Perfume, Shampoo and Other Pet Care Products for All Breeds, Ages, and Sizes.' },
            { name: "robots", content: "index,follow"},
            { property: "og:type", content: "website"},
            { property: "og:url", content: "https://petvays.com/"},
      
            { property: "og:description", content: "PetVays Provides Biscuits, Mutton Munchies, Rawhide Bones, Natural Perfume, Shampoo and Other Pet Care Products for All Breeds, Ages, and Sizes."},
            { property: "og:image", content: "http://petvays.com/assets/img/ezgif.com-gif-maker.gif"},
            {property: "twitter:url", content: "https://petvays.com/"},
       
            {property: "twitter:description", content: "PetVays Provides Biscuits, Mutton Munchies, Rawhide Bones, Natural Perfume, Shampoo and Other Pet Care Products for All Breeds, Ages, and Sizes."},
            {property: "twitter:image", content: "http://petvays.com/assets/img/ezgif.com-gif-maker.gif"},
            {rel: 'canonical', href: 'https://petvays.com/'},
        ]);
    }

    ngOnInit(): void {
    }

    facilityContent = [
        {
            img: 'assets/img/product-icon.png',
            title: 'Biscuits',
        },
        {
            img: 'assets/img/product-icon1.png',
            title: 'Mutton Munchies',
        },
        {
            img: 'assets/img/product-icon2.png',
            title: 'Rawhide Bones',
           
        },
        {
            img: 'assets/img/product-icon3.png',
            title: 'Natural Perfume',
         
        },
        {
            img: 'assets/img/product-icon4.png',
            title: 'Shampoo',
         
        }
    ]
    
//  partnerItem = [
//         {
//             link: '#',
//             img: 'assets/img/partner/partner1.png'
//         },
//         {
//             link: '#',
//             img: 'assets/img/partner/partner2.png'
//         },
//         {
//             link: '#',
//             img: 'assets/img/partner/partner3.png'
//         },
//         {
//             link: '#',
//             img: 'assets/img/partner/partner4.png'
//         },
//         {
//             link: '#',
//             img: 'assets/img/partner/partner5.png'
//         }
//     ]
    partnerSlidesOptions: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			}
		}
    }

}

