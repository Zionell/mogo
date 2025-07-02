import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";
import { BlogItem } from "./blog.type";
import { NgFor, NgOptimizedImage } from "@angular/common";

@Component({
    standalone: true,
    selector: "blog",
    templateUrl: "./blog.component.html",
    imports: [
        TitleSectionComponent,
        WrapperSectionComponent,
        NgFor,
        NgOptimizedImage,
    ],
})
export class BlogComponent {
    id: string = "blog";
    supTitle: string = "Our stories";
    title: string = "Latest blog";

    blogs: BlogItem[] = [
        {
            date: "15",
            month: "Jan",
            imgSrc: "/images/blog/1.png",
            title: "Lorem ipsum dolor sit amet",
            description:
                "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            views: 542,
            comments: 17,
        },
        {
            date: "14",
            month: "Jan",
            imgSrc: "/images/blog/2.png",
            title: "sed do eiusmod tempor",
            description:
                "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            views: 992,
            comments: 42,
        },
        {
            date: "12",
            month: "Jan",
            imgSrc: "/images/blog/3.png",
            title: "incididunt ut labore et dolore",
            description:
                "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            views: 1560,
            comments: 98,
        },
    ];
}
