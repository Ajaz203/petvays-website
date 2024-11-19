import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-upcoming-products',
    templateUrl: './upcoming-products.component.html',
    styleUrls: ['./upcoming-products.component.scss']
})
export class UpcomingProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: "Top Categories for your Dog",
            // paragraph: "Delicious Biscuits & Chews"
            // paragraph: "Shopping for Dogs? We have got it all."
        }
    ]
    sectionTitleM = [
        {
            title: "Delicious Biscuits & Chews",
            // paragraph: "Delicious Biscuits & Chews"
            // paragraph: "Shopping for Dogs? We have got it all."
        }
    ]
    sectionTitle1 = [
        {
            title: "Yummy Munchies Sticks",
            // paragraph: "Yummy Munchies Sticks"
            // paragraph: "Shopping for Dogs? We have got it all."
        }
    ]
    sectionTitle2 = [
        {
            title: "Easy Grooming",
            paragraph: "Shampoo & Perfumes"
            // paragraph: "Shopping for Dogs? We have got it all."
        }
    ]
   
    singleProductsBox = [
        {
            mainImg: 'assets/img/product-images/1.jpg',
            // title: 'Nutritious Food',
            // newPrice: '$150.00',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/9.jpg',
            // title: 'Delicious Treats, Biscuits & Chews',
            // newPrice: '$199.00',
            // oldPrice: '$210.00',
            // sale: 'Sale!',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/5.jpg',
            // title: 'Easy Grooming',
            // newPrice: '$223.99',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        // {
        //     mainImg: 'assets/img/product-images/5.jpg',
        //     // title: 'Modern Leather Soft',
        //     // newPrice: '$199.00',
        //     // oldPrice: '$210.00',
        //     // sale: 'Sale!',
        //     // detailsLink: 'simple-product'
        // }
    ]

    productsSlidesOptions: OwlOptions = {
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
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

    singleProductsBox1 = [
        {
            mainImg: 'assets/img/product-images/3.jpg',
            // title: 'Nutritious Food',
            // newPrice: '$150.00',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/11.jpg',
            // title: 'Delicious Treats, Biscuits & Chews',
            // newPrice: '$199.00',
            // oldPrice: '$210.00',
            // sale: 'Sale!',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/10.jpg',
            // title: 'Easy Grooming',
            // newPrice: '$223.99',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        // {
        //     mainImg: 'assets/img/product-images/9.jpg',
        //     title: 'Modern Leather Soft',
        //     // newPrice: '$199.00',
        //     // oldPrice: '$210.00',
        //     // sale: 'Sale!',
        //     // detailsLink: 'simple-product'
        // }
    ]

    singleProductsBox2 = [
        {
            mainImg: 'assets/img/product-images/16.jpg',
            // title: 'Nutritious Food',
            // newPrice: '$150.00',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/18.jpg',
            // title: 'Delicious Treats, Biscuits & Chews',
            // newPrice: '$199.00',
            // oldPrice: '$210.00',
            // sale: 'Sale!',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/4.jpg',
            // title: 'Easy Grooming',
            // newPrice: '$223.99',
            // oldPrice: '',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/17.jpg',
            // title: 'Modern Leather Soft',
            // newPrice: '$199.00',
            // oldPrice: '$210.00',
            // sale: 'Sale!',
            // detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/product-images/14.jpg',
            // title: 'Modern Leather Soft',
            // newPrice: '$199.00',
            // oldPrice: '$210.00',
            // sale: 'Sale!',
            // detailsLink: 'simple-product'
        }
    ]

}