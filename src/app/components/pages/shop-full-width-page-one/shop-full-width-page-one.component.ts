import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { APIS } from 'src/app/config';
import { PetvaysServiceService } from 'src/app/petvays-service.service';

@Component({
    selector: 'app-shop-full-width-page-one',
    templateUrl: './shop-full-width-page-one.component.html',
    styleUrls: ['./shop-full-width-page-one.component.scss']
})
export class ShopFullWidthPageOneComponent implements OnInit {
    Content: any;
    product_list: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: PetvaysServiceService) {

    }

    ngOnInit(): void {
        this.productlist();
        this.resetOption = [this.options[0]];
    }

    pageTitle = [
        {
            bgImage: 'assets/img/images/cc.jpg',
            title: 'Your Pets Deserve The Best'
        }
    ]
    // singleProductsBox = [
    //     {
    //         mainImg: 'assets/img/images/Biscuits brown.jpg',
    //         title: 'PetVays All Life Stages Chicken Flavour Real Chicken Biscuit 900Gms',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Biscuits.jpg',
    //         title: 'PetVays Oven Baked Milk Dog Biscuits, Calcium Rich Dog Treat 900Gms',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/muchies .jpg',
    //         title: 'PetVays All Life Stages Munchy Sticks, Chicken Flavour, Dog Treats',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/muchies packet.jpg',
    //         title: 'PetVays All Life Stages Munchy Sticks, Mutton Flavour, Dog Treats',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Rawhide bones .jpg',
    //         title: 'PetVays Healthy Rawhide Bone Treat for Dog Healthcare 250Gms',
    //         newPrice: '229.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Rawhide bones big.jpg',
    //         title: 'PetVays Healthy Rawhide Bone Treat for Dog Healthcare 500Gms',
    //         newPrice: '399.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Biscuits brown.jpg',
    //         title: 'PetVays All Life Stages Chicken Flavour Real Chicken Biscuit 450Gms',
    //         newPrice: '149.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Biscuits.jpg',
    //         title: 'PetVays Oven Baked Milk Dog Biscuits, Calcium Rich Dog Treat 450Gms',
    //         newPrice: '159.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/muchies .jpg',
    //         title: 'PetVays All Life Stages Munchy Sticks, Chicken Flavour, Dog Treats',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Rawhide bones .jpg',
    //         title: 'PetVays Healthy Rawhide Bone Treat for Dog Healthcare 250Gms',
    //         newPrice: '229.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/muchies packet.jpg',
    //         title: 'PetVays All Life Stages Munchy Sticks, Mutton Flavour, Dog Treats',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/images/Biscuits.jpg',
    //         title: 'PetVays Oven Baked Milk Dog Biscuits, Calcium Rich Dog Treat 900Gms',
    //         newPrice: '199.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     }
    // ]
    // For Routing to details page
    productlist() {
        let formdata = {
            "limit": 20,
            "storeid": "Pet6197",
            "offset": 0,
        }
        console.log("Response from formdata of productlist", formdata)
        this.http.post(APIS.productList, formdata, true)
            .subscribe((res: any) => {
                this.product_list = res;
                console.log("Response from product list API", this.product_list)
            }, (error: any) => {
                console.log(error)
            });
    }
    showDetails(item: any) {
        this.router.navigateByUrl('/simple-product', { state: { productId : item } });
    }

    // For Pagination
    shopFullWidth: number = 1;

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        {
            name: "Default",
        },
        {
            name: "Popularity",
        },
        {
            name: "Latest",
        },
        {
            name: "Price: low to high",
        },
        {
            name: "Price: high to low",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}