import { NgFor, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: "the-footer",
    imports: [NgFor, NgOptimizedImage],
    templateUrl: "./the-footer.component.html",
})
export class TheFooterComponent {
    instGallery = [
        "/images/instagram/1.png",
        "/images/instagram/2.png",
        "/images/instagram/3.png",
        "/images/instagram/4.png",
        "/images/instagram/5.png",
        "/images/instagram/6.png",
        "/images/instagram/7.png",
        "/images/instagram/8.png",
        "/images/instagram/9.png",
    ];

    currentYear = new Date().getFullYear();

    footerBlogs = [
        {
            img: "/images/blogs/1.png",
            title: "Lorem ipsum dolor sit amet,consectetur adipiscing",
            date: "Jan 9, 2016",
            link: "#",
        },
        {
            img: "/images/blogs/2.png",
            title: "Consectetur adipiscing elit,sed do eiusmod tempor",
            date: "Jan 9, 2016",
            link: "#",
        },
        {
            img: "/images/blogs/3.png",
            title: "sed do eiusmod temporincididunt ut labore",
            date: "Jan 9, 2016",
            link: "#",
        },
    ];
}
