import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-facility-style-one',
    templateUrl: './facility-style-one.component.html',
    styleUrls: ['./facility-style-one.component.scss']
})
export class FacilityStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    facilityContent = [
        {
            icon: 'bx bx-shopping-bag',
            title: 'Shop Online',
            paragraph: 'All the supplies you need, from one trusted source.'
        },
        {
            icon: 'bx bx-purchase-tag',
            title: 'Best Price Guaranteed',
            paragraph: 'Our Price Match Guarantee ensures you get the best deal - every single time.'
        },
        {
            icon: 'bx bx-info-square',
            title: 'Genuine Products',
            paragraph: 'All products sold on PetVays are completely Genuine.'
        },
        {
            icon: 'bx bx-check-shield',
            title: 'Secured Payments',
            paragraph: 'Payments done on PetVays is completely secure.'
        }
    ]
    facilityImg = [
        {
            img: 'assets/img/images/features.png'
        }
    ]

}