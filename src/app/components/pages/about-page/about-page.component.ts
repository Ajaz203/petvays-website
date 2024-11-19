import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/images/about-us.jpeg',
            title: 'About Us'
        }
    ]

    aboutContent = [
        {
            subTitle: `ABOUT US`,
            //title: `We've Been Thriving in 37 Years In This Area`,
            paragraph: `Petvays is the pet retailer of Pets food products for your pet.At Petvays,we
            love your pets and we believe that pets make us better people. Petvays is an
            online Dog’s food company that makes feeding real food to your very own dog
            really easy. Our tagline is self-explanatory “your pet our passion” Whatever
            Pet Vays do is for the love for pets, and we are passionate about what we do.
            Our aim is to deliver good quality products that will keep your pet Healthy,
            Happy and which brings contentment & grin on your face.`,
            content: [
                {
                    //title: `Our Goal`,
                    //paragraph: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
                {
                    title: `Our Mission`,
                    paragraph: `Our mission is to deliver high quality and low-cost one stop platform for ecommerce, promotions, inventory and home delivery needs to our consumers, retailers, businesses and wholesalers.`
                },
                {
                    title: `Our Vision`,
                    paragraph: `Our vision is to bring all businesses and every individual of India on an ecommerce and mobile one stop commerce platform allowing them to focus on their primary needs, business activities, while reducing spam, time investments, cost in the safe & secure and trust-worthy SPOT environment and marketplace.`
                }
            ]
        }
    ]
    // aboutImage = [
    //     {
    //         img: 'assets/img/about-img1.jpg'
    //     },
    //     {
    //         img: 'assets/img/about-img2.jpg'
    //     }
    // ]

}