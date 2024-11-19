import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-categories',
    templateUrl: './homeone-categories.component.html',
    styleUrls: ['./homeone-categories.component.scss']
})
export class HomeoneCategoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCategoriesBigBox = [
        {
            // img: 'assets/img/images/p33.jpg',
            // title: 'Recent Products',
            // buttonText: 'Shop Now',
            // link: 'shop-full-width-1'
        }
    ]
    singleCategoriesBox = [
        {
            // img: 'assets/img/images/p44.jpg',
            // title: 'New Design',
            // buttonText: 'Shop Now',
            // link: 'shop-full-width-1'
        },
        {
            // img: 'assets/img/images/p22.jpg',
            // title: 'Minimal Sofa',
            // buttonText: 'Shop Now',
            // link: 'shop-full-width-1'
        }
    ]

}