import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { APIS } from 'src/app/config';
import { PetvaysServiceService } from 'src/app/petvays-service.service';

@Component({
    selector: 'app-simple-product-page',
    templateUrl: './simple-product-page.component.html',
    styleUrls: ['./simple-product-page.component.scss']
})
export class SimpleProductPageComponent implements OnInit {
   productID:any
   product_Id_Details:any
    constructor(private router:Router, private activatedRoute:ActivatedRoute, private http: PetvaysServiceService) { 
         console.log(this.router.getCurrentNavigation().extras.state);
    }

    ngOnInit(): void {
        console.log("Data recive from Product list",history.state);
               this.productID=history.state.productId;
               console.log(this.productID,"hellongjhghjbvhjbvj")
              this.productlistDetails(this.productID)
    }

    pageTitle = [
        {
            bgImage: 'assets/img/images/aa.jpg',
            //title: 'Love your Pet More'
        }
    ]

    productlistDetails(productId:any) {
        console.log(this.productID,"hello")
        let formdata = {
            "productId":productId
        }
        console.log("Response from formdata of productDetails", formdata)
        this.http.post(APIS.productDetails, formdata, true)
            .subscribe((res: any) => {
                this.product_Id_Details = res;
                console.log("Response from product Detail API", this.product_Id_Details)
            }, (error: any) => {
                console.log(error)
            });
    }
    buyProduct(){
        window.open(`https://spotyourdeal.com/${this.productID}`,"_self")
    }

}