import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: "Customer Reviews",
            paragraph: "What our top Customer says about PetVays."
        }
    ]
    singleBlogPost = [
        {
            img: 'assets/img/images/review1.mp4',
            // tag: 'Furniture',
            // title: 'Spotlight on Bernhardt Modern American Furniture',
            // paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            // linkText: 'Read More',
            // link: 'blog-details'
        },
        {
            img: 'assets/img/images/review2.mp4',
            // tag: 'Sofa',
            // title: '4 Ways to Decorate your Living Room with a Brown Sofa',
            // paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            // linkText: 'Read More',
            // link: 'blog-details'
        },
        {
            img: 'assets/img/images/review3.mp4',
            // tag: 'Outdoor',
            // title: '4 Ways to Create the Ultimate Outdoor Living Space',
            // paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            // linkText: 'Read More',
            // link: 'blog-details'
        }
    ]

}